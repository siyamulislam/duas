// db.js
const sqlite3 = require('sqlite3').verbose();

const connectDatabase = (databasePath) => {
  const db = new sqlite3.Database(databasePath);
  return db;
};

module.exports = connectDatabase;
