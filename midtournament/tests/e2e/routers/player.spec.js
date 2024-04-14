const request = require("supertest");
const app = require("../../../src/app");
const utils = require('../../utils');

describe('Player routes', () => {
    beforeEach(async () => {
        await utils.initializeDB();
    });

    describe('/players/create', () => {
        test('should create a player', async () => {
            const dummy = {
                name: 'fool',
                email: 'fool@test.com',
                discord: 'foolish_dummy'
            }
            const response = await request(app).post('/players/create').send(dummy);

            const dbPlayer = await utils.getRecordFromDB('Players', 'email', dummy.email);

            expect(response.statusCode).toBe(200);
            expect(dbPlayer).toMatchObject(dummy);
        })
    })
});