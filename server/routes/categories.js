// categories.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Endpoint to fetch categories by id or cat_id
router.get("/", (req, res) => {
  const { id, cat_id } = req.query;

  let query = "SELECT * FROM category";

  // Check if id or cat_id is provided in the query parameters
  if (id || cat_id) {
    query += " WHERE ";
    const conditions = [];

    if (id) {
      conditions.push(`id = ${id}`);
    }

    if (cat_id) {
      conditions.push(`cat_id = ${cat_id}`);
    }

    query += conditions.join(" AND ");
  }

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ category: rows });
  });
});

module.exports = router;
