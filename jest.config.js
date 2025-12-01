module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'lib/**/*.js',
    '!lib/db.js', // Exclude database configuration
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testTimeout: 10000,
  verbose: true,
  clearMocks: true,
  restoreMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}
