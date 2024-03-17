const request = require('supertest');
const app = require('../../src/app');

describe('Match Routes', () => {
    // used in all tests
    const matches = [
        {p1: 'a', p2: 'b', tournament: 20, id: 1},
        {p1: 'c', p2: 'd', tournament: 20, id: 2},
        {p1: 'f', p2: 'e', tournament: 20, id: 3},
        {p1: 'b', p2: 'a', tournament: 10, id: 4},
        {p1: 'c', p2: 'd', tournament: 10, id: 5},
        {p1: 'f', p2: 'e', tournament: 10, id: 6}
    ];
    describe('Get matches by tournament', async () => {
        test('should return all matches by tournament id', async () => {
            const testId = 20;
            const testMatches = matches.filter((m) => m.tournament === testId);
            
            const response = await request(app).get(`/matches/event/${testId}`);
            expect(response.body.matches.length).toBe(testMatches.length);
            expect(response.body.matches).toMatchObject(testMatches);
        });

        test('should throw error if invalid id given', async () => {
            const response = await request(app).get('/matches/event');
            expect(response.statusCode).toBe(400);
        });
    });

    describe('Get matches by player', () => {
        test('should return all the matched for player id', async() => {
            const testPlayerId = 'a';
            const testMatches = matches.filter((m) => m.p1 === 'a' || m.p2 === 'a');

            const response = await request(app).get(`/matches/player/${testPlayerId}`);
            expect(response.body.matches).toMatchObject(testMatches);
        });

        test('should throw error if invalid id given', async () => {
            const response = await request(app).get('/matches/player');
            expect(response.statusCode).toBe(400);
        });
    });
});