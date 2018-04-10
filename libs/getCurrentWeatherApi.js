const rest = require('restler');
const currentWeatherModel = require("../models/currentWeatherForecastModel");
const apiKey = process.env.WEATHER_API_KEY;

class FetchCurrentWeatherApiData {

    static getCurrentWeather(result) {

        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/weather?q=${result[0]},${result[1]}&APPID=${apiKey}&units=metric`).on('complete', function(weatherResult) {

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