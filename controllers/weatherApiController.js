 const FetchCC = require("../libs/fetchLocationCountryCode");
 const Fetchcurrentweatherapi = require("../libs/getCurrentWeatherApi");
 const Fetchcurrentweatherfivedayforecastapi = require("../libs/getCurrentWeatherFiveDayForecastApi");
 const FetchHd = require("../libs/getHistroicalWeatherApi");
 const FetchLatAndLong = require("../libs/fetchLocationlatandlong");

 let currentWeatherAndFiveDayForecast = [];
 let currentWeatherApiResult = [];
 let CityAndCode;

 class WeatherApiController {


     /**
      * this function get current weather and bnext five day forecast of desired location
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */

     static getCurrentWeatherAndForecast(req, res) {
         FetchCC.FetchCityAndCCData(req.body.location)
             .then(result => {
                 // CityAndCode = result;
                 return Fetchcurrentweatherapi.getCurrentWeather(result)
             })
             .then(result => {
                 //console.log(result);
                 res.status(200).send({
                     result: result
                 })
             })
             .catch(err => {
                 res.status(400).send(err);
             })

     }

     /**
      * this function get historical data of desired location
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */
     static getHistoricalInfo(req, res) {
         FetchLatAndLong.FetchCityLatAndLongData(req.body.hlocation)
             .then(result => {
                 FetchHd.fetchHistoricalWeatherData(result)
             })
             .then(result => {
                 //console.log('fetchHistoricalWeatherData ' + result);
                 res.status(200).send({
                         result: result
                     })
                     .catch(err => {
                         res.status(400).send(err);
                     })

                 //  FetchHd.fetchHistoricalWeatherData(result)
                 //      .then(result => {
                 //          res.status(200).send({
                 //                  result: result
                 //              })
                 //              .catch(err => {
                 //                  res.status(400).send(err);
                 //              })
                 //      })
             })
     }

     /**
      * this function get next five day forecast of desired location
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */
     /*  .then(result => {
                           currentWeatherAndFiveDayForecast.push(result);
                           return Fetchcurrentweatherfivedayforecastapi.getCurrentWeatherFiveDayForecastApi(CityAndCode)
                       })
                       .then(result => {
                           currentWeatherAndFiveDayForecast.push(result);
                           res.status(200).send({
                               result: currentWeatherAndFiveDayForecast
                           })
                       })*/
 }
 module.exports = WeatherApiController;