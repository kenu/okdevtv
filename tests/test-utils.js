const bcrypt = require('bcryptjs');

const testUtils = {
  createMockUser: (overrides = {}) => ({
    email: 'test@example.com',
    passwd: 'hashedpassword123',
    github: 'testuser',
    ...overrides,
  }),

  createMockBookmark: (overrides = {}) => ({
    pathname: '/test/path',
    userId: 1,
    ...overrides,
  }),

  hashPassword: async (password) => {
    return bcrypt.hash(password, 10);
  },

  comparePassword: async (password, hash) => {
    return bcrypt.compare(password, hash);
  },

  mockDbQuery: (results = []) => {
    return Promise.resolve([results, {}]);
  },

  delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
};

module.exports = testUtils;