// app.test.js
const request = require('supertest');
const app = require('../src');

test('should return hello world', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello, World!');
});