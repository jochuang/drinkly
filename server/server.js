const path = require('path');
const express = require ('express');
const app = express();
const PORT = 3000;

// require router
const apiRouter = require('./api');

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serving static component
app.use(express.static(path.resolve(__dirname, '../client')));
// define route handler
// app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});