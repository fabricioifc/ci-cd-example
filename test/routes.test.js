const request = require('supertest');
const app = require('../src/index');

describe('API Routes', () => {
  it('should return a hello message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });

  // Adicione mais testes para suas rotas
});
