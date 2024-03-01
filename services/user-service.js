const user = require('../lib/user')
const user_candidate = require('../lib/user_candidate')
const mail = require('../lib/mail')
const { v4: uuidv4 } = require('uuid')
const { hashPassword, comparePassword } = require('../lib/utils')

module.exports = {
  signupByGitHub: async function (github) {
    const email = github.email || github.login
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
  signupByEmail: async function (email) {
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
      id: res.dataValues.id,
      email: res.dataValues.email,
      finish: 'P',
    }

    await user_candidate.update(userData)
    const resultUser = await user.create(userData)
    return resultUser
  },
  setUpPassword: async ({ password, password_confirm, uuid }) => {
    if (password.length < 8) {
      throw new Error('비밀번호는 8자리 이상으로 해주세요.')
    }
    if (password !== password_confirm) {
      throw new Error('입력하신 두 비밀번호가 다릅니다.')
    }
    const crypted_password = await hashPassword(password)

    const data = await user_candidate.getByUuid(uuid)
    if (!data.dataValues.id) {
      throw new Error('email 주소를 찾을 수 없습니다.')
    }
    const result = await user.update({
      id: data.dataValues.id,
      passwd: crypted_password,
    })
    await user_candidate.update({id: data.dataValues.id, finish: 'Y'})

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
    const data = {
      email,
      passwd: crypted_password,
    }
    const result = await user.update(data)
    return result
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
    const data = {
      email: email,
      uuid: uuid,
      reset: 'Y',
    }
    return (await user_candidate.create(data)).dataValues
  },
}
