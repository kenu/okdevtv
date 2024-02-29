const user_candidate = require('../lib/user_candidate')
const user = require('../lib/user')
const knex = require('../lib/knex')
const mail = require('../lib/mail')
const { v4: uuidv4 } = require('uuid')
const { hashPassword, comparePassword } = require('../lib/utils')

module.exports = {
  signupByGitHub: async function (github) {
    const email = github.email
    if (!email) {
      return 0
    }
    const result = await user.getByEmail(email)
    if (!result) {
      return (await user.create({ github: JSON.stringify(github), email }))
        .dataValues
    } else {
      const update = await user.update({
        github: JSON.stringify(github),
        id: result.dataValues.id,
      })
      if (update[0] === 1) {
        return result.dataValues
      }
    }
  },
  signupByGitHub_: async function (github) {
    console.log(github)
    const email = github.email
    if (!email) {
      return 0
    }
    // check duplication
    const result = await knex.raw(`select email from user where email = ?`, [
      email.trim(),
    ])
    let changedRows = 0
    if (result[0].length > 0) {
      const update_account = `update user set github = ?, updated_at = now() where email = ?;`
      const result2 = await knex.raw(update_account, [
        JSON.stringify(github),
        email,
      ])
      changedRows = result2[0].changedRows
    } else {
      const insert_account = `insert into user (seq, email, github, createdAt)
      values (null, ?, ?, now());`
      const result2 = await knex.raw(insert_account, [
        email,
        JSON.stringify(github),
      ])
      changedRows = result2[0].changedRows
    }
    return changedRows
  },
  signupByEmail: async function (email) {
    // check duplication of email
    // check frequency for spamming in five minutes
    // send guide email with uuid
    const uuid = uuidv4()
    this.sendGuideMail(uuid, email)
    // save email, uuid
    return await user_candidate.create({
      email: email.trim(),
      uuid,
    })
  },
  sendGuideMail: async function (uuid, email) {
    const url = process.env.BASE_URL
    const message = `
    <p>안녕하세요. OKdevTV 가입 안내 메일입니다.</p>
        <p>아래 링크 페이지로 오셔서 가입을 완료하실 수 있습니다.</p>
        <p><a href="${url}/user/setup?q=${uuid}" target="_blank">
        ${url}/user/setup?q=${uuid}</a></p>
        <p></p><p>- Kenu @ OKdevTV</p>`

    // send email
    const send_result = await mail.send(email, message)
    console.log(send_result)
    return send_result
  },

  setUpAccount: async (uuid) => {
    // find by uuid
    const res = await user_candidate.getByUuid(uuid)
    if (!res.dataValues.email) {
      throw new Error(`invalid code`)
    }
    const userData = {
      email: res.dataValues.email,
      uuid: res.dataValues.uuid,
      finish: 'Y',
    }

    await user_candidate.update(userData)
    const resultUser = await user.create(userData)
    return resultUser
  },
  setUpPassword: async ({ password, password_confirm, hash }) => {
    if (password.length < 8) {
      throw new Error('비밀번호는 8자리 이상으로 해주세요.')
    }
    if (password !== password_confirm) {
      throw new Error('입력하신 두 비밀번호가 다릅니다.')
    }
    const crypted_password = await hashPassword(password)
    const data = await user_candidate.getByUuid(hash)

    if (!data.dataValues.email) {
      throw new Error('email 주소를 찾을 수 없습니다.')
    }
    const result = await user.update({
      email: data.dataValues.email,
      passwd: crypted_password,
    })

    return result
  },
  changePassword: async ({ password, password_confirm, email }) => {
    if (password.length < 8) {
      throw new Error('비밀번호는 8자리 이상으로 해주세요.')
    }
    if (password !== password_confirm) {
      throw new Error('입력하신 두 비밀번호가 다릅니다.')
    }
    const crypted_password = await hashPassword(password)

    const query = `update user set passwd = ?, updated_at = now()
        where email = ?`
    const result = await knex.raw(query, [crypted_password, email])

    return { result }
  },

  doLogin: async ({ email, password }) => {
    const result = await user.getByEmail(email)
    if (!result.dataValues.id) {
      throw new Error('등록되지 않은 사용자입니다.')
    }
    const isOk = await comparePassword(password, result.dataValues.passwd)
    if (isOk) {
      return result.dataValues
    } else {
      throw new Error('비밀번호가 일치하지 않습니다.')
    }
  },
  resetPassword: async (email) => {
    // generate uuid
    const uuid = uuidv4()
    const url = process.env.BASE_URL
    const message = `
        <p>안녕하세요. OKdevTV 비밀번호 변경 메일입니다.</p>
        <p>아래 링크 페이지로 오셔서 비밀번호를 변경하실 수 있습니다.</p>
        <p><a href="${url}/user/setup?q=${uuid}" target="_blank">
        ${url}/user/setup?q=${uuid}</a></p>
        <p></p><p>- Kenu @ OKdevTV</p>`

    // send email
    const send_result = await mail.send(email, message)
    console.log(send_result)

    // save sending info
    return knex.raw(
      `insert into user_candidate
(seq, email, uuid, createdAt, reset) values (null, ?, ?, now(), 'Y');`,
      [email, uuid]
    )
  },
}
