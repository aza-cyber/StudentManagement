const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ✅ REGISTER (SIGNUP) */
exports.register = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "User already exists" });
      }
      res.status(201).json({ message: "User registered successfully" });
    }
  );
};

/* ✅ LOGIN */
exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (result.length === 0) {
        return res.status(401).json({ message: "User not found" });
      }

      const user = result[0];
      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Wrong password" });
      }

      const token = jwt.sign({ id: user.id }, "secretkey", {
        expiresIn: "1h"
      });

      res.json({ token });
    }
  );
};
