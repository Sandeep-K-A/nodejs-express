const Joi = require("joi");

const createStudentSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  age: Joi.number().integer().min(1).max(120).required(),
});

const updateStudentSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  age: Joi.number().integer().min(1).max(120),
}).min(1);

module.exports = { createStudentSchema, updateStudentSchema };
