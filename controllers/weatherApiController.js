 const FetchCC = require("../libs/fetchLocationCountryCode");
 const Fetchcurrentweatherapi = require("../libs/getCurrentWeatherApi");
 const Fetchcurrentweatherfivedayforecastapi = require("../libs/getFiveDayForecastApi");

 class WeatherApiController {
     /**
      * this function get current weather and bnext five day forecast of desired location
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */

     static getCurrentWeather(req, res) {
         FetchCC.FetchCityAndCCData(req.body.location)
             .then(result => {
                 return Fetchcurrentweatherapi.getCurrentWeather(result)
             })
             .then(result => {
                 res.status(200).send({
                     result: result
                 })
             })
             .catch(err => {
                 res.status(400).send(err);
             })
     }

     /**
      * this function get next five day forecast of desired location
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */
     static getforecastWeather(req, res) {
         FetchCC.FetchCityAndCCData(req.body.flocation)
             .then(result => {
                 return Fetchcurrentweatherfivedayforecastapi.getFiveDayForecastApi(result)
             })
             .then(result => {
                 res.status(200).send({
                     result: result
                 })
             })
             .catch(err => {
                 res.status(400).send(err);
             })
     }
 }
 module.exports = WeatherApiController;