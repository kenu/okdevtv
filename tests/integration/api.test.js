const request = require('supertest');
const express = require('express');

// Mock the main app for integration testing
const app = express();
app.use(express.json());

// Add a test route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/test', (req, res) => {
  const { message } = req.body;
  res.status(200).json({ received: message, processed: true });
});

describe('API Integration Tests', () => {
  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.status).toBe('ok');
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('POST /api/test', () => {
    it('should process message correctly', async () => {
      const testMessage = 'Hello World';

      const response = await request(app)
        .post('/api/test')
        .send({ message: testMessage })
        .expect(200);

      expect(response.body.received).toBe(testMessage);
      expect(response.body.processed).toBe(true);
    });

    it('should handle missing message', async () => {
      const response = await request(app)
        .post('/api/test')
        .send({})
        .expect(200);

      expect(response.body.received).toBeUndefined();
      expect(response.body.processed).toBe(true);
    });
  });
});
