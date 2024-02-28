const bookmark = require('../lib/bookmark')
const user = require('../lib/user')
const userData = require('./user.test')
const data = {
  pathname: '/mib/nginx',
}
describe('bookmark', () => {
  it('should create a bookmark', async () => {
    const result = await bookmark.create(data)
    expect(result.pathname).toBe(data.pathname)
    bookmark.remove(result.dataValues.id)
  })
  it('combined with user', async () => {
    data.userId = (await user.create(userData)).dataValues.id
    const result = await bookmark.create(data)
    // get bookmark
    const row = await bookmark.get(result.dataValues.id)
    expect(row.pathname).toBe(data.pathname)
    expect(row.userId).toBe(data.userId)
    await bookmark.remove(result.dataValues.id)
    await user.remove(data.userId)
  })

  it('combined with user and get all bookmark by id', async () => {
    data.userId = (await user.create(userData)).dataValues.id
    const result = await bookmark.create(data)
    data.pathname = '/mib/nginx2'
    const result2 = await bookmark.create(data)
    // get bookmark
    const rows = await bookmark.findAll(data.userId)
    expect(rows.length).toBe(2)
    expect(rows[1].pathname).toBe(data.pathname)
    expect(rows[0].pathname).toBe(result.dataValues.pathname)
    expect(rows[0].userId).toBe(data.userId)
    await bookmark.remove(result2.dataValues.id)
    await bookmark.remove(result.dataValues.id)
    await user.remove(data.userId)
  })
})
