 const FetchCC = require("../libs/fetchLocationCountryCode");
 const Fetchcurrentweatherapi = require("../libs/getCurrentWeatherAndForecastApi");

 let ans1 = "heello";
 let ans2 = "heello2";
 // let results = [ans1, ans2];
 let locationCountryCode = [];



 class PhotoController {


     /**
      * this function get photos from requested data
      * @method search
      * @param {String} req - req.body.name string
      * @param {String} res -  string
      * @return {Promise} return JSON Object OF Photos
      */

     static getCurrentWeatherAndForecast(req, res) {

         FetchCC.FetchCityAndCCData(req.body.location)
             .then(result => {
                 //console.log(result);
                 locationCountryCode = result;
                 //console.log(locationCountryCode);
                 //result = [lat,long] - from node.Geocoder
                 //returns result and pass as arguements in next function
                 return Fetchcurrentweatherapi.getCurrentWeather(result)
             })
             .then(result => {
                 // turn the result into a json Object
                 res.status(200).send({
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
 }

 module.exports = PhotoController;