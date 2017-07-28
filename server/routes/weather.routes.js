'use strict';

const express = require('express');
const router = express.Router();
const weatherCtrl = require('../controllers/weather.controller.js');

/**
    router.use(function(req, res, next) {
        // .. middleware logic
        next();
    });
 */

/**
 * '/weather'
 */
router.get('/', weatherCtrl.getWeatherInfo);

/**
 * '/weather/test'
 */
router.get('/test', (req, res) => {
    res.json({
        example: "testing api"
    });
});

module.exports = router;