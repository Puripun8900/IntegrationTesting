const { expect } = require("chai");
const request = require("supertest");
const { app } = require("../src/server");

describe("Integration Test: /hex-to-rgb route", () => {
  it("should return correct rgb for valid hex", async () => {
    const res = await request(app).get("/hex-to-rgb?hex=0000ff");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ r: 0, g: 0, b: 255 });
  });

  it("should return error for invalid hex", async () => {
    const res = await request(app).get("/hex-to-rgb?hex=123");
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("error");
  });
});
