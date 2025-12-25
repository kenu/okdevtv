# Testing Guide

This document provides guidelines and best practices for testing the okdevtv application.

## Test Structure

### Directory Structure
```
tests/
├── setup.js          # Test environment setup
├── test-utils.js     # Test utilities and helpers
├── unit/            # Unit tests
├── integration/     # Integration tests
└── fixtures/        # Test data fixtures
```

### Test Categories

1. **Unit Tests**: Test individual functions and modules in isolation
2. **Integration Tests**: Test interactions between modules
3. **Database Tests**: Test database operations using SQLite in-memory database

## Running Tests

### Run all tests
```bash
npm test
```

### Run specific test file
```bash
npx jest tests/utils.test.js
```

### Run tests with coverage
```bash
npx jest --coverage
```

### Run tests in watch mode
```bash
npx jest --watch
```

## Writing Tests

### Basic Test Structure
```javascript
describe('Module Name', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  it('should do something specific', () => {
    // Test implementation
    expect(result).toBe(expected);
  });
});
```

### Best Practices

1. **Use descriptive test names**: Test names should clearly describe what is being tested
2. **Arrange-Act-Assert**: Structure tests with clear setup, action, and assertion phases
3. **Test one thing per test**: Each test should focus on a single behavior
4. **Use test utilities**: Leverage `test-utils.js` for common test data and operations
5. **Mock external dependencies**: Use Jest mocks for external services and databases
6. **Clean up after tests**: Always clean up test data and restore mocks

### Mocking Guidelines

```javascript
// Mock external modules
jest.mock('module-name');

// Mock functions
const mockFunction = jest.fn();
mockFunction.mockReturnValue('mocked value');

// Mock implementations
jest.spyOn(object, 'method').mockImplementation(() => {
  return 'mocked result';
});
```

### Database Testing

For database tests, we use SQLite in-memory database to avoid dependencies on external database servers:

```javascript
const { Sequelize } = require('sequelize');

beforeEach(() => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  });
});
```

### Test Data

Use the `test-utils.js` file for creating consistent test data:

```javascript
const testUtils = require('./test-utils');

const mockUser = testUtils.createMockUser({
  email: 'custom@example.com'
});
```

## Coverage Goals

Aim for the following coverage thresholds:
- **Statements**: 80%
- **Branches**: 75%
- **Functions**: 80%
- **Lines**: 80%

## Continuous Integration

Tests are automatically run in CI/CD pipeline. Ensure all tests pass before merging pull requests.

## Debugging Tests

### Run tests with verbose output
```bash
npx jest --verbose
```

### Debug specific test
```bash
node --inspect-brk ./node_modules/.bin/jest --runInBand tests/utils.test.js
```

## Common Issues and Solutions

1. **Database connection errors**: Use SQLite in-memory database for tests
2. **Async test issues**: Always use `async/await` or return promises in tests
3. **Mock not working**: Ensure mocks are set up before importing modules
4. **Test isolation**: Use `beforeEach` and `afterEach` for proper test isolation
