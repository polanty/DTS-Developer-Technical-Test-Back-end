// src/models/taskModel.js
const db = require("../db");

const insertTask = ({
  id,
  title,
  description,
  status,
  due_date_time,
  created_at,
}) => {
  const stmt = db.prepare(`
    INSERT INTO tasks (id, title, description, status, due_date_time, created_at)
    VALUES (@id, @title, @description, @status, @due_date_time, @created_at)
  `);
  return stmt.run({
    id,
    title,
    description,
    status,
    due_date_time,
    created_at,
  });
};

module.exports = { insertTask };
