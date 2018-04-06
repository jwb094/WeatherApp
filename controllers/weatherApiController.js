 const FetchCC = require("../libs/fetchLocationCountryCode");
 const Fetchcurrentweatherapi = require("../libs/getCurrentWeatherApi");
 const Fetchcurrentweatherfivedayforecastapi = require("../libs/getCurrentWeatherFiveDayForecastApi");
 //const Fetchhistroicalapi = require("../libs/getHistroicalApi");

 let currentWeatherAndFiveDayForecast = [];
 let currentWeatherApiResult = [];
 let CityAndCode;

 class WeatherApiController {


     /**
      * this function get 
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */

     static getCurrentWeatherAndForecast(req, res) {
         //result = [lat,long] - from node.Geocoder
         //returns result and pass as arguements in next function
         FetchCC.FetchCityAndCCData(req.body.location)
             .then(result => {
                 CityAndCode = result;
                 return Fetchcurrentweatherapi.getCurrentWeather(result)
             })
             .then(result => {
                 currentWeatherAndFiveDayForecast.push(result);
                 return Fetchcurrentweatherfivedayforecastapi.getCurrentWeatherFiveDayForecastApi(CityAndCode)
             })
             .then(result => {
                 currentWeatherAndFiveDayForecast.push(result);
                 res.status(200).send({
                     result: currentWeatherAndFiveDayForecast
                 })
             })
             .catch(err => {
                 res.status(400).send(err);
             })
     }

     /**
      * this function get 
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF
      */
     /*static getHistoricalInfo(req, res) { 
     }*/

     /*static get(req, res) { 
     }*/
 }

 module.exports = WeatherApiController;;