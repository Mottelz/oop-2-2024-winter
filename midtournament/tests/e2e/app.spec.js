const request = require('supertest');
const app = require('../../src/app');

describe('Sanity check', () => {
    test('1 should equal 1', () => {
        expect(1).toBe(1);
    });
});

describe('404 Test', () => {
    test('Should return 404 for missing route.', async () => {
        const response = await request(app).put('/non-exsistent');
        expect(response.statusCode).toBe(404);
    });
});