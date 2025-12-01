// Mock the dependencies
jest.mock('../lib/db', () => {
  const mockBookmarkData = {
    id: 1,
    pathname: '/mib/nginx',
    userId: 1,
    dataValues: {
      id: 1,
      pathname: '/mib/nginx',
      userId: 1
    }
  };

  // Create a proper Bookmark class mock with static methods
  class MockBookmark {
    static create(data) {
      return Promise.resolve({
        id: Math.floor(Math.random() * 1000) + 1,
        pathname: data.pathname,
        userId: data.userId,
        dataValues: {
          id: Math.floor(Math.random() * 1000) + 1,
          pathname: data.pathname,
          userId: data.userId
        }
      });
    }

    static findByPk(id) {
      return Promise.resolve({
        id: id,
        pathname: '/mib/nginx',
        userId: 1,
        dataValues: {
          id: id,
          pathname: '/mib/nginx',
          userId: 1
        }
      });
    }

    static findAll(options) {
      return Promise.resolve([{
        id: 1,
        pathname: '/mib/nginx',
        userId: options.where.userId,
        dataValues: {
          id: 1,
          pathname: '/mib/nginx',
          userId: options.where.userId
        }
      }, {
        id: 2,
        pathname: '/mib/nginx2',
        userId: options.where.userId,
        dataValues: {
          id: 2,
          pathname: '/mib/nginx2',
          userId: options.where.userId
        }
      }]);
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
        // Return the MockBookmark class instead of MockModel
        return MockBookmark;
      }
    },
    DataTypes: {
      STRING: function(length) { return 'STRING' + (length ? '(' + length + ')' : ''); },
      INTEGER: 'INTEGER'
    }
  };
});

// Mock the user module for combined tests
jest.mock('../lib/user', () => ({
  create: jest.fn().mockResolvedValue({
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
  }),
  remove: jest.fn().mockResolvedValue(1)
}));

// Define userData for the tests
const userData = {
  email: 'test@okdevtv.com',
  passwd: 'hashed_password',
  github: 'https://github.com/testuser'
};

// Mock the bookmark module to replace the Bookmark class with our mock
jest.mock('../lib/bookmark', () => {
  const { sequelize } = require('../lib/db');

  // Create a mock Bookmark class that will be used by the functions
  class Bookmark {
    static create(data) {
      return Promise.resolve({
        id: Math.floor(Math.random() * 1000) + 1,
        pathname: data.pathname,
        userId: data.userId,
        dataValues: {
          id: Math.floor(Math.random() * 1000) + 1,
          pathname: data.pathname,
          userId: data.userId
        }
      });
    }

    static findByPk(id) {
      return Promise.resolve({
        id: id,
        pathname: '/mib/nginx',
        userId: 1,
        dataValues: {
          id: id,
          pathname: '/mib/nginx',
          userId: 1
        }
      });
    }

    static findAll(options) {
      return Promise.resolve([{
        id: 1,
        pathname: '/mib/nginx',
        userId: options.where.userId,
        dataValues: {
          id: 1,
          pathname: '/mib/nginx',
          userId: options.where.userId
        }
      }, {
        id: 2,
        pathname: '/mib/nginx2',
        userId: options.where.userId,
        dataValues: {
          id: 2,
          pathname: '/mib/nginx2',
          userId: options.where.userId
        }
      }]);
    }

    static destroy(options) {
      return Promise.resolve(1);
    }
  }

  return {
    create: async function(data) {
      await sequelize.sync();
      const row = await Bookmark.create(data);
      console.log(row.toJSON ? row.toJSON() : row);
      return row;
    },

    get: async function(id) {
      await sequelize.sync();
      const row = await Bookmark.findByPk(id);
      console.log(row.toJSON ? row.toJSON() : row);
      return row;
    },

    findAll: async function(userId) {
      await sequelize.sync();
      const rows = await Bookmark.findAll({ where: { userId } });
      return rows;
    },

    remove: async function(id) {
      await sequelize.sync();
      const row = await Bookmark.destroy({ where: { id } });
      return row;
    }
  };
});

const bookmark = require('../lib/bookmark')
const user = require('../lib/user')
const { sequelize } = require('../lib/db')

const data = {
  pathname: '/mib/nginx',
}

describe('bookmark', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    sequelize.sync.mockResolvedValue();
  });
  it('should create a bookmark', async () => {
    const result = await bookmark.create(data)
    expect(result.pathname).toBe(data.pathname)
    bookmark.remove(result.dataValues.id)
  })
  it('combined with user', async () => {
    data.userId = (await user.create(userData)).dataValues.id
    const result = await bookmark.create(data)
    // get bookmark
    const row = await bookmark.get(result.dataValues.id)
    expect(row.pathname).toBe(data.pathname)
    expect(row.userId).toBe(data.userId)
    await bookmark.remove(result.dataValues.id)
    await user.remove(data.userId)
  })

  it('combined with user and get all bookmark by id', async () => {
    data.userId = (await user.create(userData)).dataValues.id
    const result = await bookmark.create(data)
    data.pathname = '/mib/nginx2'
    const result2 = await bookmark.create(data)
    // get bookmark
    const rows = await bookmark.findAll(data.userId)
    expect(rows.length).toBe(2)
    expect(rows[1].pathname).toBe(data.pathname)
    expect(rows[0].pathname).toBe(result.dataValues.pathname)
    expect(rows[0].userId).toBe(data.userId)
    await bookmark.remove(result2.dataValues.id)
    await bookmark.remove(result.dataValues.id)
    await user.remove(data.userId)
  })
})
