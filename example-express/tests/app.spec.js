const request = require("supertest");
const app = require("../src/app");

describe("Sanity check", () => {
    test("one should equal one", () => {
        expect(1).toBe(1);
    })
})

describe("Root path", () => {
    test("should reutrn 200 to GET", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    test("should return 404 if not GET", async() => {
        const response = await request(app).post("/");
        expect(response.statusCode).toBe(404);
    });
});

describe("Error route", () => {
    test("should return 500 to get", async() => {
        const response = await request(app).get("/error");
        expect(response.statusCode).toBe(500);
    });

    test("should return 404 to not get", async() => {
        const response = await request(app).post("/error");
        expect(response.statusCode).toBe(404);
    });
})