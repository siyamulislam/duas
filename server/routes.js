// routes.js
const express = require('express');
const router = express.Router();

// Import the connectDatabase function from db.js
const connectDatabase = require('./db_connect');

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Customize the welcome message as needed
});

// A route to get all category from a table
router.get('/category', (req, res) => {
  // Use the connectDatabase function to establish a database connection
  const db = connectDatabase('./dua_main.sqlite');
  const query = 'SELECT * FROM category';

  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }

    // Close the database connection after handling the request
    db.close();
  });
});

module.exports = router;
