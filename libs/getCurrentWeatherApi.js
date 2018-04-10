const rest = require('restler');
const currentWeatherModel = require("../models/currentWeatherForecastModel");


class FetchCurrentWeatherApiData {

    static getCurrentWeather(result) {

        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/weather?q=${result[0]},${result[1]}&APPID=7e3951b4f189a6c133b64aaf9abf7728&units=metric`).on('complete', function(weatherResult) {

                    if (weatherResult instanceof Error) {
                        reject(weatherResult);
                    } else {
                        let WeatherArray = [];
                        try {
                            let currentweatherdetails = new currentWeatherModel(weatherResult);
                            WeatherArray.push(currentweatherdetails);
                        } catch (e) {}
                        resolve(WeatherArray);
                    }
                });
            })
    }
}
module.exports = FetchCurrentWeatherApiData;