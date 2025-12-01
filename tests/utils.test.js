const { hashPassword, comparePassword } = require('../lib/utils');
const bcrypt = require('bcryptjs');

jest.mock('bcryptjs');

describe('Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('hashPassword', () => {
    it('should hash password successfully', async () => {
      const mockHash = 'hashedpassword123';
      const password = 'testpassword';

      bcrypt.hash.mockImplementation((pwd, salt, callback) => {
        callback(null, mockHash);
      });

      const result = await hashPassword(password);

      expect(result).toBe(mockHash);
      expect(bcrypt.hash).toHaveBeenCalledWith(password, 10, expect.any(Function));
    });

    it('should handle hashing errors', async () => {
      const password = 'testpassword';
      const error = new Error('Hashing failed');

      bcrypt.hash.mockImplementation((pwd, salt, callback) => {
        callback(error, null);
      });

      await expect(hashPassword(password)).rejects.toThrow(error);
    });
  });

  describe('comparePassword', () => {
    it('should return true for matching passwords', async () => {
      const password = 'testpassword';
      const hash = 'hashedpassword123';

      bcrypt.compare.mockResolvedValue(true);

      const result = await comparePassword(password, hash);

      expect(result).toBe(true);
      expect(bcrypt.compare).toHaveBeenCalledWith(password, hash);
    });

    it('should return false for non-matching passwords', async () => {
      const password = 'testpassword';
      const hash = 'differenthash';

      bcrypt.compare.mockResolvedValue(false);

      const result = await comparePassword(password, hash);

      expect(result).toBe(false);
      expect(bcrypt.compare).toHaveBeenCalledWith(password, hash);
    });

    it('should handle comparison errors', async () => {
      const password = 'testpassword';
      const hash = 'hashedpassword123';
      const error = new Error('Comparison failed');

      bcrypt.compare.mockRejectedValue(error);

      await expect(comparePassword(password, hash)).rejects.toThrow(error);
    });
  });
});
