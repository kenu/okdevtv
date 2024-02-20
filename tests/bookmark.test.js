const bookmark = require('../lib/bookmark');
describe('bookmark', () => {
  it('should list bookmark', async () => {
    const data = {
      pathname: '/'
    };
    await bookmark.save(data);
    const rows = await bookmark.list();
    expect(rows).to.be.an('array');
    // expect(rows.length).to.be.above(0);
  });
});
