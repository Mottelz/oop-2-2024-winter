const request = require("supertest");
const app = require("../../../src/app");
const utils = require('../../utils');

describe('Player routes', () => {
    describe('/players/create', () => {
        beforeEach(async () => {
            await utils.initializeDB();
        });

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
        });

        test('should respond 400 if missing discord', async ()  => {
            const dummy = {
                name: 'test dummy',
                email: 'test@dummy.com'
            };

            const response = await request(app).post('/players/create').send(dummy);

            expect(response.statusCode).toBe(400);
        });
    });

    describe('/players/all', () => {
        const dummyPlayers = [
            {name: 'p1', discord: 'p1', email: 'p1@test.com'},
            {name: 'p2', discord: 'p2', email: 'p2@test.com'},
            {name: 'p3', discord: 'p3', email: 'p3@test.com'},
            {name: 'p4', discord: 'p4', email: 'p4@test.com'},
            {name: 'p5', discord: 'p5', email: 'p5@test.com'},
        ];
        
        beforeEach(async () => {
            await utils.initializeDB();
            await utils.addToDB(
                'Players', 
                ['name', 'discord', 'email'], 
                dummyPlayers
            );
        });

        test('should get all players', async () => {
            const response = await request(app).get('/players/all');

            expect(response.body).toMatchObject({players: dummyPlayers});
        });
    });
});