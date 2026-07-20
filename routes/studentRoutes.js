const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const validateId = require("../middlewares/validateId");
const {
  createStudentSchema,
  updateStudentSchema,
} = require("../validators/studentValidator");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.post("/", validate(createStudentSchema), createStudent);
router.get("/", getAllStudents);
router.get("/:id", validateId, getStudentById);
router.put("/:id", validateId, validate(updateStudentSchema), updateStudent);
router.delete("/:id", validateId, deleteStudent);

module.exports = router;
