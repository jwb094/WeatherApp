const rest = require('restler');
const currentFiveDayWeatherForecastModel = require("../models/currentWeatherFiveDayModel");
const apiKey = process.env.WEATHER_API_KEY;

class FetchCurrentWeatherForecastApiData {

    static getFiveDayForecastApi(result) {

        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/forecast?q=${result[0]},${result[1]}&APPID=${apiKey}&units=metric`).on('complete', function(weatherForecastResult) {
                    if (weatherForecastResult instanceof Error) {
                        reject(weatherForecastResult);
                    } else {
                        let WeatherForecastArray = [];
                        let arrayForWeatherFiveDayForecast = weatherForecastResult.list;
                        for (var i in arrayForWeatherFiveDayForecast) {
                            try {
                                let currentweatherdetails = new currentFiveDayWeatherForecastModel(arrayForWeatherFiveDayForecast[i]);
                                WeatherForecastArray.push(currentweatherdetails);
                            } catch (e) {}
                            //take parameter back to promise chain
                            resolve(WeatherForecastArray);
                        }
                    }
                });
            })
    }
}
module.exports = FetchCurrentWeatherForecastApiData;