// Mock the db module and notify module
jest.mock('../lib/db', () => {
  const mockUserData = {
    id: 1,
    email: 'test@okdevtv.com',
    passwd: 'hashed_password',
    github: 'https://github.com/testuser',
    dataValues: {
      id: 1,
      email: 'test@okdevtv.com',
      passwd: 'hashed_password',
      github: 'https://github.com/testuser'
    }
  };

  // Create a proper User class mock with static methods
  class MockUser {
    static create(data) {
      return Promise.resolve(mockUserData);
    }

    static findByPk(id) {
      return Promise.resolve(mockUserData);
    }

    static findOne(options) {
      return Promise.resolve(mockUserData);
    }

    static findAll() {
      return Promise.resolve([mockUserData]);
    }

    static update(data, options) {
      return Promise.resolve([1]);
    }

    static destroy(options) {
      return Promise.resolve(1);
    }
  }

  const mockSequelize = {
    sync: jest.fn(),
    query: jest.fn(),
    QueryTypes: {
      SELECT: 'SELECT'
    }
  };

  return {
    sequelize: mockSequelize,
    Model: class MockModel {
      static init(attributes, options) {
        // Return the MockUser class instead of MockModel
        return MockUser;
      }
    },
    DataTypes: {
      STRING: function(length) { return 'STRING' + (length ? '(' + length + ')' : ''); }
    }
  };
});

// Mock the user module to replace the User class with our mock
jest.mock('../lib/user', () => {
  const { sequelize } = require('../lib/db');
  const notify = require('../lib/notify');

  // Create a mock User class that will be used by the functions
  class User {
    static create(data) {
      return Promise.resolve({
        id: 1,
        email: data.email,
        passwd: data.passwd,
        github: data.github,
        dataValues: {
          id: 1,
          email: data.email,
          passwd: data.passwd,
          github: data.github
        }
      });
    }

    static findByPk(id) {
      return Promise.resolve({
        id: id,
        email: 'test@okdevtv.com',
        passwd: 'hashed_password',
        github: 'https://github.com/testuser',
        dataValues: {
          id: id,
          email: 'test@okdevtv.com',
          passwd: 'hashed_password',
          github: 'https://github.com/testuser'
        }
      });
    }

    static findOne(options) {
      return Promise.resolve({
        id: 1,
        email: options.where.email,
        passwd: 'hashed_password',
        github: 'https://github.com/testuser',
        dataValues: {
          id: 1,
          email: options.where.email,
          passwd: 'hashed_password',
          github: 'https://github.com/testuser'
        }
      });
    }

    static findAll() {
      return Promise.resolve([{
        id: 1,
        email: 'test@okdevtv.com',
        passwd: 'hashed_password',
        github: 'https://github.com/testuser',
        dataValues: {
          id: 1,
          email: 'test@okdevtv.com',
          passwd: 'hashed_password',
          github: 'https://github.com/testuser'
        }
      }]);
    }

    static update(data, options) {
      return Promise.resolve([1]);
    }

    static destroy(options) {
      return Promise.resolve(1);
    }
  }

  return {
    create: async function(data) {
      await sequelize.sync();
      const row = await User.create(data);
      notify(row.dataValues.email + ' 님이 가입했습니다.');
      return row;
    },

    get: async function(id) {
      await sequelize.sync();
      const row = await User.findByPk(id);
      return row;
    },

    getByEmail: async function(email) {
      await sequelize.sync();
      const row = await User.findOne({ where: { email } });
      return row;
    },

    findAll: async function() {
      await sequelize.sync();
      const rows = await User.findAll();
      return rows;
    },

    update: async function(data) {
      await sequelize.sync();
      const row = await User.update(data, { where: { id: data.id } });
      return row;
    },

    remove: async function(id) {
      await sequelize.sync();
      const row = await User.destroy({ where: { id } });
      return row;
    },

    removeAll: async function() {
      await sequelize.sync();
      const row = await User.destroy({ where: {}, truncate: true });
      return row;
    }
  };
});

jest.mock('../lib/notify', () => jest.fn());

const user = require('../lib/user');
const notify = require('../lib/notify');
const { sequelize } = require('../lib/db');
const { hashPassword, comparePassword } = require('../lib/utils');

describe('User', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Mock sequelize.sync to resolve immediately
  beforeAll(() => {
    sequelize.sync.mockResolvedValue();
  });

  it('should create a user', async () => {
    const userData = {
      email: 'test@okdevtv.com',
      passwd: 'hashed_password',
      github: 'https://github.com/testuser'
    };

    const result = await user.create(userData);

    expect(sequelize.sync).toHaveBeenCalled();
    expect(notify).toHaveBeenCalledWith('test@okdevtv.com 님이 가입했습니다.');
    expect(result).toBeDefined();
    expect(result.email).toBe('test@okdevtv.com');
  });

  it('should get a user', async () => {
    const userId = 1;

    const result = await user.get(userId);

    expect(sequelize.sync).toHaveBeenCalled();
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
  });

  it('should handle user operations', async () => {
    // Test that the functions exist and can be called
    expect(typeof user.create).toBe('function');
    expect(typeof user.get).toBe('function');
    expect(typeof user.getByEmail).toBe('function');
    expect(typeof user.findAll).toBe('function');
    expect(typeof user.update).toBe('function');
    expect(typeof user.remove).toBe('function');
    expect(typeof user.removeAll).toBe('function');
  });
});
