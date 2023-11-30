const asset = require('../lib/asset');

describe('asset', () => {

  it('should save asset', () => {
    const data = {
      datetime: '2020-01-01 00:00:00',
      income: 1000,
      outlay: 0,
      description: 'test',
    };
    asset.save(null, data);
  });

  it('should list asset', () => {
    asset.list(null);
  });

} );
