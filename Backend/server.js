const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('./Config/database');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

    connection.query(sql, [username, hashedPassword], (err, results) => {
        if (err) {
            res.status(500).send('Error signing up');
        } else {
            res.status(201).send('User signed up successfully');
        }
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';

    connection.query(sql, [username], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).send('Invalid username or password');
        }

        const user = results[0];
        if (bcrypt.compareSync(password, user.password)) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid username or password');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
