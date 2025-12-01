const email = require('../lib/email');

describe('Email Module', () => {
  describe('Module Loading', () => {
    it('should load without errors', () => {
      expect(email).toBeDefined();
      expect(typeof email.sendEmail).toBe('function');
    });
  });
});
