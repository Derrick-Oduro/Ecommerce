app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields." });
  }

  // Insert into database (this is a dummy example, replace with your actual DB code)
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.status(201).json({ message: "User registered successfully!" });
  });
});
