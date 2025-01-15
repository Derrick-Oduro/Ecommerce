const mysql = require("mysql2");
require("dotenv").config(); // Load environment variables from .env

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Derek.555",
  database: "ecommerce_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

module.exports = connection;
