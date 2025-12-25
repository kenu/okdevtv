const { v4: uuidv4 } = require('uuid');
const testUtils = require('./test-utils');

describe('UUID Utils', () => {
  it('should generate uuid with correct length', () => {
    const uuid = uuidv4();
    expect(uuid).toBeDefined();
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(uuid.length).toBe(36);
  });

  it('should generate unique uuids', () => {
    const uuid1 = uuidv4();
    const uuid2 = uuidv4();

    expect(uuid1).not.toBe(uuid2);
  });

  it('should generate multiple unique uuids', () => {
    const uuids = new Set();
    for (let i = 0; i < 100; i++) {
      uuids.add(uuidv4());
    }

    expect(uuids.size).toBe(100);
  });
});
