// src/routes/tasks.js
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { taskSchema } = require("../validators");
const { insertTask } = require("../models/taskModel");

const router = express.Router();

router.route("/").post((req, res) => {
  const { error, value } = taskSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((d) => d.message) });
  }

  // Validate due date is in the future
  const due = new Date(value.dueDateTime);
  if (isNaN(due.getTime()) || due <= new Date()) {
    return res
      .status(400)
      .json({ error: "dueDateTime must be a valid future date/time" });
  }

  const id = uuidv4();
  const task = {
    id,
    title: value.title,
    description: value.description || null,
    status: value.status,
    due_date_time: value.dueDateTime,
    created_at: new Date().toISOString(),
  };

  try {
    insertTask(task);
    // Return the task in API shape (camelCase)
    return res.status(201).json({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      dueDateTime: task.due_date_time,
      createdAt: task.created_at,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
