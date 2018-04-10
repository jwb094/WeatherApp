const express = require("express");
const router = express.Router();


const weatherApiCallsController = require('../controllers/weatherApiController');

/* API CALLS */

// call method weatherApiCallsController.getCurrentWeatherAndForecast to  get current weather
router.post("/weather/:location", weatherApiCallsController.getCurrentWeather)

// call method weatherApiCallsController.getforecastInfo to get forecast
router.post("/forecast/:flocation", weatherApiCallsController.getforecastInfo);
module.exports = router;