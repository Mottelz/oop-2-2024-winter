const request = require("supertest");
const app = require("../../src/app");

describe("Patient home route", () => {
    test("should responed to GET", async () => {
        const response = await request(app).get('/patient/home');
        expect(response.statusCode).toBe(200);
        expect(response.body.route).toBe('/patient/home');
    });
});

describe("Get patient route", () => {
    test("should return id given", async () => {
        const id = '5';
        const response = await request(app).get(`/patient/id/${id}`);
        expect(response.body.patient).toBe(id);
    });

    test("should return 404 if id is missing", async () => {
        const response = await request(app).get(`/patient/id/`);
        expect(response.statusCode).toBe(404);
    })
});

describe("Create patient route", () => {
    test("should return created patient", async () => {
        const testGuy = {
            name: "testy",
            age: 25,
            email: "hello@naptime.com"
        }

        const response = await request(app).post('/patient/new').send(testGuy);
        expect(response.body.patient).toMatchObject(testGuy);
    });
})