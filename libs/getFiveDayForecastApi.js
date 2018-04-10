const rest = require('restler');
const currentFiveDayWeatherForecastModel = require("../models/currentWeatherFiveDayModel");
class FetchCurrentWeatherForecastApiData {

    static getFiveDayForecastApi(result) {

        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/forecast?q=${result[0]},${result[1]}&APPID=7e3951b4f189a6c133b64aaf9abf7728&units=metric`).on('complete', function(weatherForecastResult) {
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