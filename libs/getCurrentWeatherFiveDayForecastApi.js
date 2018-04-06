const rest = require('restler');
const currentWeatherForecastModel = require("../models/currentWeatherFiveDayModel");

class FetchCurrentWeatherForecastApiData {

    static getCurrentWeatherFiveDayForecastApi(result) {
        //console.log('getCurrentWeatherFiveDayForecastApi' + result);
        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/forecast?q=${result[0]},${result[1]}&APPID=7e3951b4f189a6c133b64aaf9abf7728&units=metric`).on('complete', function(weatherForecastResult) {
                    // console.log('5daysForecast');
                    //console.log(weatherForecastResult.list[0].main);
                    // console.log(weatherForecastResult.list[0].weather);
                    // console.log(weatherForecastResult.list[0].wind);
                    // console.log(weatherForecastResult.city.name);
                    if (weatherForecastResult instanceof Error) {
                        reject(weatherForecastResult);
                    } else {
                        let WeatherArray = [];
                        let arrayForWeatherFiveDayForecast = weatherForecastResult.list[0];
                        console.log('arrayForWeatherFiveDayForecast' + arrayForWeatherFiveDayForecast.main);
                        for (let i in arrayForWeatherFiveDayForecast) {
                            try {
                                console.log(arrayForWeatherFiveDayForecast[i]);
                                let currentweatherdetails = new currentWeatherForecastModel(arrayForWeatherFiveDayForecast[i]);
                                // console.log(currentweatherdetails);
                                WeatherArray.push(currentweatherdetails);
                                //console.log("Hello " + WeatherArray);
                            } catch (e) {}

                            //take parameter back to promise chain
                            resolve(WeatherArray);
                        }
                    }
                });
            })
    }
}
module.exports = FetchCurrentWeatherForecastApiData;