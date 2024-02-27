const knex = require('../lib/knex')
const mail = require('../lib/mail')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')

function hashPassword(password) {
  const saltRounds = 10
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })
}

module.exports = {
  signupByGitHub: async function (github) {
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
    // check duplication
    try {
      const result = await knex.raw(`select email from user where email = ?`, [
        email.trim(),
      ])
      if (result[0].length > 0) {
        throw new Error('duplicate email')
      }

      // check recent
      const sql_recent = `select count(*) as cnt
          from user_candidate
          where email = ? and finish = 'N'
          and timediff(now(), createdAt) < '00:05:00';`
      const result_recent = await knex.raw(sql_recent, [email.trim()])
      if (result_recent[0][0]['cnt'] > 0) {
        throw new Error('email sent already')
      }

      // generate uuid
      const uuid = uuidv4()
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

      // save sending info
      return knex.raw(
        `insert into user_candidate
  (seq, email, uuid, createdAt) values (null, ?, ?, now());`,
        [email, uuid]
      )
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  setUpAccount: async (hash) => {
    const query = `select * from user_candidate
where uuid = ? and finish != 'Y';`
    const result = await knex.raw(query, [hash])
    if (result[0].length == 0) {
      throw new Error(`invalid code`)
    }
    const { seq, email, reset } = result[0][0]

    if (reset === 'N') {
      const query_account = `insert into user (seq, email, createdAt)
            values (null, ?, now());`
      await knex.raw(query_account, [email])
    }

    const query_finish_candidate = `update user_candidate set finish = 'P', updatedAt = now() where seq = ?;`
    return knex.raw(query_finish_candidate, [seq])
  },
  setUpPassword: async ({ password, password_confirm, hash }) => {
    if (password.length < 8) {
      throw new Error('비밀번호는 8자리 이상으로 해주세요.')
    }
    if (password !== password_confirm) {
      throw new Error('입력하신 두 비밀번호가 다릅니다.')
    }
    const crypted_password = await hashPassword(password)
    const query_account = `select seq, email, reset from user_candidate where uuid = ?`
    const result_account = await knex.raw(query_account, [hash])
    if (result_account[0].length === 0) {
      throw new Error('email 주소를 찾을 수 없습니다.')
    }

    const { seq, email, reset } = result_account[0][0]

    const query = `update user set passwd = ?, updated_at = now()
        where email = ?`
    const result = await knex.raw(query, [crypted_password, email])

    const query_finish = `update user_candidate set finish='Y', updatedAt = now()
        where seq = ?;`
    await knex.raw(query_finish, [seq])

    return { result, reset }
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
    const query = `select seq, passwd from user where email = ?`
    const result = await knex.raw(query, [email])
    if (result[0].length === 0) {
      throw new Error('등록되지 않은 사용자입니다.')
    }
    const hashedPassword = result[0][0].passwd
    return bcrypt.compare(password, hashedPassword)
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
