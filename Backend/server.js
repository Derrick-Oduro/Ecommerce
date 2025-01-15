const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const db = require("./Config/database");
const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(
  session({
    secret: "A#d9$kLp7@W0x!bN&Qq2*e4R6^jX8m!KZP",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Sign up route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Database error" });
      }
      return res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Sign in route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = ?`;

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length > 0) {
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.user = user;
        return res.status(200).json({ message: "Login successful!" });
      }
    }
    res.status(401).json({ message: "Invalid credentials" });
  });
});

// Logout route
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to logout" });
    }
    res.status(200).json({ message: "Logout successful" });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/session", (req, res) => {
  if (req.session.user) {
    res.status(200).json({
      loggedIn: true,
      user: {
        name: req.session.user.name,
        email: req.session.user.email,
      },
    });
  } else {
    res.status(200).json({ loggedIn: false });
  }
});
