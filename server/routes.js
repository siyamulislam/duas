// routes.js
const express = require('express');
const router = express.Router();

// Import the connectDatabase function from db.js
const connectDatabase = require('./db_connect');
const db = connectDatabase('./dua_main.sqlite');

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Customize the welcome message as needed
});

// A route to get all category from a table
router.get('/category', (req, res) => {
  // Use the connectDatabase function to establish a database connection
  const query = 'SELECT * FROM category';

  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }

  });
});
// A route to get all sub-category from a table
router.get('/sub-category/:cat_id', (req, res) => {
  // Use the connectDatabase function to establish a database connection
  const query = `SELECT * FROM sub_category where cat_id=${req.params.cat_id}`; 
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }

  });
});
// A route to get dua from a table
router.get('/dua/:cat_id/:subcat_id', (req, res) => {
  // Use the connectDatabase function to establish a database connection
  const query = `SELECT * FROM dua where cat_id=${req.params.cat_id} and subcat_id=${req.params.subcat_id}`;

  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }

  });
});

module.exports = router;
