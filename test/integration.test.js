const request = require('supertest');
const app = require('../src/server'); // Import Express app

describe('GET /hex-to-rgb/:hex - Integration Tests', () => {
  it('Should return RGB for valid hex "FF5733"', async () => {
    const res = await request(app).get('/hex-to-rgb/FF5733');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ r: 255, g: 87, b: 51 });
  });

  it('Should return 400 for invalid hex "ZZZZZZ"', async () => {
    const res = await request(app).get('/hex-to-rgb/ZZZZZZ');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid HEX color.');
  });

  it('Should handle hex with # prefix "#00FF00"', async () => {
    const res = await request(app).get('/hex-to-rgb/%2300FF00'); // URL encoded #
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ r: 0, g: 255, b: 0 });
  });
});
