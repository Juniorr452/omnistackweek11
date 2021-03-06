const request = require("supertest");
const app = require("../../src/app");
const conn = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD2",
        email: "contato@apad.com",
        whatsapp: "47900000000",
        city: "Rio do Sul",
        uf: "SC"
      });

    expect(response.body).toHaveProperty("id");
  });
});
