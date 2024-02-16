// index.js
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
