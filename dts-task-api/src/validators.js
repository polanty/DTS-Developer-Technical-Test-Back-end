// src/validators.js
const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  description: Joi.string().allow("", null),
  status: Joi.string().valid("PENDING", "IN_PROGRESS", "COMPLETED").required(),
  dueDateTime: Joi.string().isoDate().required(),
});

module.exports = { taskSchema };
