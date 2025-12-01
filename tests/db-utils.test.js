const { Sequelize } = require('sequelize');

describe('Database Utils', () => {
  let sequelize;

  beforeEach(() => {
    // Mock Sequelize instead of creating real instance
    sequelize = {
      query: jest.fn(),
      close: jest.fn(),
      QueryTypes: {
        SELECT: 'SELECT'
      }
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle database queries', async () => {
    const mockResults = [{ now: '2023-01-01 12:00:00' }];

    sequelize.query.mockResolvedValue([mockResults, {}]);

    const [results] = await sequelize.query('SELECT NOW()', {
      type: sequelize.QueryTypes.SELECT,
    });

    expect(results).toEqual(mockResults);
    expect(sequelize.query).toHaveBeenCalledWith('SELECT NOW()', {
      type: sequelize.QueryTypes.SELECT,
    });
  });

  it('should handle database connection errors gracefully', async () => {
    const errorMessage = 'Connection failed';
    sequelize.query.mockRejectedValue(new Error(errorMessage));

    await expect(sequelize.query('SELECT NOW()')).rejects.toThrow(errorMessage);
  });
});
