const rest = require('restler');
const currentWeatherModel = require("../models/currentWeatherModel");

class FetchCurrentWeatherApiData {

    static getCurrentWeather(result) {
        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/weather?q=${result[0]},${result[1]}&APPID=7e3951b4f189a6c133b64aaf9abf7728`).on('complete', function(weatherResult) {
                    //console.log(weatherResult);
                    if (weatherResult instanceof Error) {
                        reject(weatherResult);
                    } else {

                        let WeatherArray = [];

                        try {
                            let currentweatherdetails = new currentWeatherModel(weatherResult);
                            console.log(currentweatherdetails);

                            WeatherArray.push(currentweatherdetails);
                            //console.log("Hello " + currentWeatherArray);
                        } catch (e) {}

                        //take parameter back to promise chain
                        resolve(WeatherArray);
                    }
                });
            })
    }
}
module.exports = FetchCurrentWeatherApiData;