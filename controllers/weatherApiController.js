 const FetchCC = require("../libs/fetchLocationCountryCode");
 const Fetchcurrentweatherapi = require("../libs/getCurrentWeatherApi");
 const Fetchcurrentweatherfivedayforecastapi = require("../libs/getCurrentWeatherFiveDayForecastApi");
 //const Fetchhistroicalapi = require("../libs/getHistroicalApi");

 let locationCountryCode = [];
 let currentWeatherApiResult;
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
                 currentWeatherApiResult = result;
                 // console.log(currentWeatherApiResult);
                 //locationCountryCode.push(result);
                 // console.log('locationCountryCode' + locationCountryCode);
                 //console.log(locationCountryCode);
                 //console.log("currentWeather Object" + result[0]);
                 //locationCountryCode.push(result);
                 // console.log(CityAndCode);
                 Fetchcurrentweatherfivedayforecastapi.getCurrentWeatherFiveDayForecastApi(CityAndCode)
             })
             .then(result => {
                 //locationCountryCode.push(result);
                 // turn the result into a json Object
                 res.status(200).send({
                     //result : locationCountryCode
                     //key: result   -   value: API JSON Object 
                     result: result
                 })
             })
             .catch(err => {
                 res.status(400).send(err);
             })

         //     currentweatherapi.getCurrentWeather(req.body.location)
         //         .then(result => {
         //             res.status(200).send({
         //                 result: result
         //             });
         //         })
         //         .catch(err => {
         //             res.status(400).send(err);
         //         })
         // }
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