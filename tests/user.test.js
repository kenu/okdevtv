const user = require('../lib/user')
const { hashPassword, comparePassword } = require('../lib/utils')
const randomEmail = require('random-email')({ domain: 'okdevtv.com' })
const userData = {
  email: randomEmail,
  passwd: '',
  github: '',
}

describe('User', () => {
  it('should create a user', async () => {
    const result = await user.create(userData)
    expect(result.email).toBe(userData.email)
    user.remove(result.dataValues.id)
  })

  it('should get a user', async () => {
    const result = await user.create(userData)
    const row = await user.get(result.dataValues.id)
    expect(row.email).toBe(userData.email)
    user.remove(result.dataValues.id)
  })

  it('login', async () => {
    const hashed = await hashPassword('okpassokpass');
    userData.passwd = hashed;
    const result = await user.create(userData)
    const row = await user.get(result.dataValues.id)
    const compare = await comparePassword('okpassokpass', row.passwd)
    expect(compare).toBe(true)

    user.remove(result.dataValues.id)
  })
})

module.exports = userData
