// subcategories.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Endpoint to fetch sub_category by id or cat_id or subcat_id
router.get("/", (req, res) => {
  const { id, cat_id, subcat_id } = req.query;

  let query = "SELECT * FROM sub_category";

  // Check if id, cat_id, or subcat_id is provided in the query parameters
  if (id || cat_id || subcat_id) {
    query += " WHERE ";
    const conditions = [];

    if (id) {
      conditions.push(`id = ${id}`);
    }

    if (cat_id) {
      conditions.push(`cat_id = ${cat_id}`);
    }

    if (subcat_id) {
      conditions.push(`subcat_id = ${subcat_id}`);
    }

    query += conditions.join(" AND ");
  }

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ sub_category: rows });
  });
});

module.exports = router;
