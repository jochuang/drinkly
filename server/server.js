const express = require('express');
const app = express();
const PORT = 3000;

// require router
const apiRouter = require('./api');

// define route handler
app.use('/api', apiRouter);

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});