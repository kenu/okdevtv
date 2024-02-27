const bookmark = require('../lib/bookmark')
const data = {
  pathname: '/mib/nginx',
}
describe('bookmark', () => {
  it('should create a bookmark', async () => {
    const result = await bookmark.create(data)
    expect(result.pathname).toBe(data.pathname)
    bookmark.remove(result.dataValues.id)
  })
})
