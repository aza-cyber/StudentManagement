const db = require("../config/db");

exports.getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    res.json(results);
  });
};

exports.addStudent = (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
    [name, email, course],
    () => res.send("Student Added")
  );
};

exports.deleteStudent = (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], () =>
    res.send("Student Deleted")
  );
};

exports.addStudent = (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ message: "All fields required" });
  }

  db.query(
    "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
    [name, email, course],
    err => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.status(201).json({ message: "Student added" });
    }
  );
};
