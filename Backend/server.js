const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./Config/database");
const PORT = 5000;

const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    credentials: true, // Allow cookies or credentials
  })
);

app.options(
  "*",
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

// Configuring the session to handle login functionality
app.use(
  session({
    secret: "A#d9$kLp7@W0x!bN&Qq2*e4R6^jX8m!KZP", // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Use secure: true in production with HTTPS
  })
);

// Login route
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
//   db.query(sql, [email, password], (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: "Internal server error" });
//     }
//     if (results.length === 0) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     // Store user info in session
//     req.session.user = { id: results[0].id, email: results[0].email };
//     res.status(200).json({ message: "Login successful" });
//   });
// });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  // Dummy login logic for testing
  if (email === "test@example.com" && password === "password123") {
    return res.status(200).json({ message: "Login successful!" });
  }

  res.status(401).json({ message: "Invalid credentials" });
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

// Route to check session
app.get("/session", (req, res) => {
  if (req.session.user) {
    res.status(200).json({ loggedIn: true, user: req.session.user });
  } else {
    res.status(200).json({ loggedIn: false });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
