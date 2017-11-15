const express = require("express");
const router = express.Router();


const weatherApiCallsController = require('../controllers/weatherApiController');

/* API CALLS */

// call method weatherApiCallsController.getCurrentWeatherAndForecast to  get current weather and forecast
router.post("/weather/:location", weatherApiCallsController.getCurrentWeatherAndForecast)


module.exports = router;