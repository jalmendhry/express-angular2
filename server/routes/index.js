'use strict';
const weatherRouter = require('./weather.routes.js');

module.exports = function(app) {

    /**
     * Default root '/'
     */
    app.get('/', function(req, res) {
        res.json({
            example: "example response"
        });
    });

    /**
     *  Setup all other routes.
     */
    app.use('/weather', weatherRouter)
};