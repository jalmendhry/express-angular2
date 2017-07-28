'use strict';

var express = require('express'),
    app = express(),
    routes = require('./server/routes/index.js'),
    port = process.env.PORT || 3000;

// Setup app routes
routes(app);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});