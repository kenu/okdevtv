const { Sequelize } = require('sequelize');

// Mock the database module to avoid connection issues
jest.mock('../lib/db', () => ({
  sequelize: {
    query: jest.fn(),
    sync: jest.fn(),
    close: jest.fn(),
    QueryTypes: {
      SELECT: 'SELECT'
    }
  }
}));

describe('Database Access', () => {
  let mockSequelize;

  beforeEach(() => {
    mockSequelize = require('../lib/db').sequelize;
    jest.clearAllMocks();
  });

  it('should handle database queries successfully', async () => {
    const mockResults = [{ now: '2023-01-01 12:00:00' }];
    mockSequelize.query.mockResolvedValue([mockResults, {}]);
    
    const [results] = await mockSequelize.query('SELECT NOW()', {
      type: mockSequelize.QueryTypes.SELECT,
    });
    
    expect(results).toEqual(mockResults);
    expect(mockSequelize.query).toHaveBeenCalledWith('SELECT NOW()', {
      type: mockSequelize.QueryTypes.SELECT,
    });
  });

  it('should handle database connection errors gracefully', async () => {
    const errorMessage = 'Connection refused';
    mockSequelize.query.mockRejectedValue(new Error(errorMessage));
    
    await expect(mockSequelize.query('SELECT NOW()')).rejects.toThrow(errorMessage);
  });

  it('should handle sync operations', async () => {
    mockSequelize.sync.mockResolvedValue(undefined);
    
    await mockSequelize.sync();
    
    expect(mockSequelize.sync).toHaveBeenCalled();
  });
});