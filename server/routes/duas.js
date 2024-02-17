// duas.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Endpoint to fetch duas by id or cat_id or subcat_id or dua_id
router.get("/", (req, res) => {
  const { id, cat_id, subcat_id, dua_id } = req.query;

  let query = "SELECT * FROM dua";

  // Check if id, cat_id, subcat_id, or dua_id is provided in the query parameters
  if (id || cat_id || subcat_id || dua_id) {
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

    if (dua_id) {
      conditions.push(`dua_id = ${dua_id}`);
    }

    query += conditions.join(" AND ");
  }

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ dua: rows });
  });
});

module.exports = router;
