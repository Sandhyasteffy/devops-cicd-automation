
const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("./app");

test("Home endpoint works", async () => {
  const response = await request(app).get("/");
  assert.equal(response.status, 200);
  assert.equal(response.body.project, "DevOps CI/CD Automation");
});

test("Health endpoint works", async () => {
  const response = await request(app).get("/health");
  assert.equal(response.status, 200);
  assert.equal(response.body.status, "healthy");
});

test("Status endpoint works", async () => {
  const response = await request(app).get("/status");
  assert.equal(response.status, 200);
  assert.equal(response.body.status, "operational");
});

test("Unknown route returns 404", async () => {
  const response = await request(app).get("/unknown");
  assert.equal(response.status, 404);
});
