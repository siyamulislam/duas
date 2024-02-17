// server.js
const express = require("express");
const db = require("./db");
const app = (module.exports = express());
const port = 4000; // Choose your desired port
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Middleware for parsing JSON
app.use(express.json());

// Require the database connection

// Require the routes
const categoriesRoutes = require("./routes/categories");
const subcategoriesRoutes = require("./routes/sub_category");
const duasRoutes = require("./routes/duas");

// Use the routes
app.use("/api/categories", categoriesRoutes);
app.use("/api/subcategories", subcategoriesRoutes);
app.use("/api/duas", duasRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
