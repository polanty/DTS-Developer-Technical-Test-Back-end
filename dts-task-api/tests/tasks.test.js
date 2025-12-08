// tests/tasks.test.js
const request = require("supertest");
const app = require("../src/index");
const db = require("../src/DB");

afterAll(() => {
  // close db if needed (better-sqlite3 doesn't expose close, but you can unlink the file)
});

describe("POST /tasks", () => {
  test("creates a task successfully", async () => {
    const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const res = await request(app).post("/tasks").send({
      title: "Test task",
      description: "desc",
      status: "PENDING",
      dueDateTime: future,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test task");
  });

  test("returns 400 on missing title", async () => {
    const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const res = await request(app).post("/tasks").send({
      description: "desc",
      status: "PENDING",
      dueDateTime: future,
    });
    expect(res.statusCode).toBe(400);
  });
});
