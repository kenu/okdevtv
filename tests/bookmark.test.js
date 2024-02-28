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
    data.userId = (await user.create(userData)).dataValues.id;
    const result = await bookmark.create(data)
    // get bookmark
    const row = await bookmark.get(result.dataValues.id)
    expect(row.pathname).toBe(data.pathname)
    expect(row.userId).toBe(data.userId)
    await bookmark.remove(result.dataValues.id)
    user.remove(data.userId)
  })
})
