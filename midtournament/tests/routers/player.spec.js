const request = require("supertest");
const app = require("../../src/app");

describe('Player routes', () => {
    test('should return player info', async () => {
        const testId = 20;   
        const response = await request(app).get(`/players/${testId}`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(testId);
    });

    test('should return new player', async () => {
        const testPlayer = {
            name: 'human',
            email: 'me@place.here'
        }
        const response = await request(app).post('/players/create').send(testPlayer);

        expect(response.body).toMatchObject(testPlayer);
    });

    test('should reject malformed player', async () => {
        const badTestPlayer = {
            name: 'missing'
        };
        const response = request.post('/players/create').send(badTestPlayer);

        expect(response.statusCode).toBe(400);
    });
});