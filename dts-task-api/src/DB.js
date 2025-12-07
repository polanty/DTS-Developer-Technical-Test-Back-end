// src/db.js
const Database = require("better-sqlite3");
const path = require("path");

const dbFile =
  process.env.DB_FILE || path.join(__dirname, "..", "database.sqlite");
const db = new Database(dbFile);

// Create table if it doesn't exist
db.exec(`
CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL,
  due_date_time TEXT NOT NULL,
  created_at TEXT NOT NULL
);
`);

module.exports = db;
