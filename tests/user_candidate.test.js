const user_candidate = require('../lib/user_candidate')
const { v4: uuidv4 } = require('uuid')
const user = require('../lib/user')

const userCandidateData = {
  email: 'kenu.heo@gmail.com',
  uuid: uuidv4(),
  passwd: '',
  github: '',
}

describe('User', () => {
  it('should create a user', async () => {
    const result = await user_candidate.create(userCandidateData)
    expect(result.email).toBe(userCandidateData.email)
    user_candidate.remove(result.dataValues.id)
  })

  it('should get a user', async () => {
    const result = await user_candidate.create(userCandidateData)
    const row = await user_candidate.get(result.dataValues.id)
    expect(row.dataValues.email).toBe(userCandidateData.email)
    user_candidate.remove(result.dataValues.id)
  })

  it('find by uuid and email, if exist add to user table and change finished to true', async () => {
    const result = await user_candidate.create(userCandidateData)
    const row = await user_candidate.getByEmailUuid(result.dataValues.email, result.dataValues.uuid)
    expect(row.email).toBe(userCandidateData.email)
    user_candidate.remove(result.dataValues.id)
  })

})
