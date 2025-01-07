const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Derrick',
    password: 'Derek.555',
    database: 'ecommerce_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = connection;
