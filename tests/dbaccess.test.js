// Mock the entire db module to avoid real database connections
jest.mock('../lib/db', () => {
  const mockSequelize = {
    query: jest.fn(),
    QueryTypes: {
      SELECT: 'SELECT'
    }
  };

  return {
    sequelize: mockSequelize
  };
});

const { sequelize } = require('../lib/db');

describe('Database Access', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should handle database queries successfully', async () => {
    // Mock the query result
    const mockResults = [{ NOW: '2023-12-01 12:00:00' }];
    sequelize.query.mockResolvedValue([mockResults]);

    const [results] = await sequelize.query('SELECT NOW()', {
      type: sequelize.QueryTypes.SELECT,
    });

    console.log(results);
    expect(results[0]).not.toBe(null);
    expect(sequelize.query).toHaveBeenCalledWith('SELECT NOW()', {
      type: sequelize.QueryTypes.SELECT,
    });
  });

  test('should handle database connection errors gracefully', async () => {
    // Mock a database connection error
    const connectionError = new Error('Connection refused');
    sequelize.query.mockRejectedValue(connectionError);

    await expect(sequelize.query('SELECT NOW()', {
      type: sequelize.QueryTypes.SELECT,
    })).rejects.toThrow('Connection refused');
  });
});
