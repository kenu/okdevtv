const { v4: uuidv4 } = require('uuid');

describe('uuid', () => {
  it('should generate uuid', () => {
    const uuid = uuidv4();
    expect(uuid.length).toBe(36);
  });
});
