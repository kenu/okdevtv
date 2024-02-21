const bookmark = require('../lib/bookmark');
describe('Bookmark', () => {
  it('should create a bookmark', async () => {
    const ts = Date.now();
    const result = await bookmark.create({
      pathname: '/mib/java/jsp' + ts,
    });
    expect(result.pathname).toBe('/mib/java/jsp' + ts);
  });

  it('should get a bookmark', async () => {
    const ts = Date.now();
    const result = await bookmark.create({
      pathname: '/mib/java/jsp' + ts,
    });
    console.log(result.id);
    const row = await bookmark.get(result.id);
    expect(row.pathname).toBe('/mib/java/jsp' + ts);
  });
});
