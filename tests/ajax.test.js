const sendToSlack = require('../lib/ajax');
const axios = require('axios');

jest.mock('axios');

// Mock dotenv before requiring the module
jest.mock('dotenv', () => ({
  config: jest.fn(() => {
    process.env.SLACK_HOOK_URL = 'https://hooks.slack.com/test';
  })
}));

describe('Ajax Module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    delete process.env.SLACK_HOOK_URL;
  });

  describe('sendToSlack', () => {
    it('should send message to Slack successfully', async () => {
      const mockResponse = { data: { ok: true } };
      const text = 'Test message';

      axios.post.mockResolvedValue(mockResponse);

      const result = await sendToSlack(text);

      expect(result).toEqual({ ok: true });
      expect(axios.post).toHaveBeenCalledWith(
        'https://hooks.slack.com/test',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          text,
        }
      );
    });

    it('should handle Slack API errors', async () => {
      const error = new Error('Network error');
      const text = 'Test message';

      axios.post.mockRejectedValue(error);

      await expect(sendToSlack(text)).rejects.toThrow('Network error');
    });

    it('should handle missing SLACK_HOOK_URL', async () => {
      delete process.env.SLACK_HOOK_URL;
      const text = 'Test message';

      await expect(sendToSlack(text)).rejects.toThrow();
    });
  });
});
