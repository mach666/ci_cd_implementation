const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("This is ge request at CI&CD implmentation with CD automated via HEROKU after programming", done);
    })
});