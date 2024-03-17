const request = require("supertest");
const app = require('../../src/app');

describe('Tournament routes', () => {
    describe('Create tournament', () => {
        test('should create tournament', async () => {
            const testTournament = {
                format: 'swiss',
                rounds: 5,
                maxPlayers: 20,
                minPlayers: 5
            }

            const response = await request(app).post('/event/create').send(testTournament);

            expect(response.body).toMatchObject(testTournament);
        });

        test('should reject malformed tournament', async () => {
            const testTournament = {
                format: 'swiss'
            }

            const response = await request(app).post('/event/create').send(testTournament);

            expect(response.statusCode).toBe(400);
        });
    });

    describe('Get tournament', () => {
        test('should return tournament with id', async () => {
            const testId = 2;
            const response = await request(app).get(`/event/${testId}`);
            expect(response.body.id).toBe(testId);
        });

        test('should list 10 most recent tournaments if none is specified', async () => {
            const response = await request(app).get('/event');
            expect(response.body.events.length).toBeGreaterThanOrEqual(0);
            expect(response.body.events.length).toBeLessThanOrEqual(10);
        });
    });

    /*
    TODO:
     - start round
     - end round
     - start tournment
     - get winner
     - get players in tournament
    */
})