const express = require("express");
const router = express.Router();
const controller = require("../controllers/student.controller");

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.delete("/:id", controller.deleteStudent);

module.exports = router;
