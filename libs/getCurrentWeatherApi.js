const rest = require('restler');
const currentWeatherModel = require("../models/currentWeatherForecastModel");

const api = process.env.WEATHER_API_KEY;
class FetchCurrentWeatherApiData {

    static getCurrentWeather(result) {
        console.log(api);
        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://api.openweathermap.org/data/2.5/weather?q=${result[0]},${result[1]}&APPID=${api}&units=metric`).on('complete', function(weatherResult) {
                    //console.log(weatherResult);
                    //console.log(weatherResult.weather[0].main);
                    //console.log(weatherResult.weather[0].description);
                    //console.log(weatherResult.main.temp_min);
                    //console.log(weatherResult.main.temp_min);
                    //console.log(weatherResult.main.humidity);
                    //console.log(weatherResult.wind.speed);
                    //console.log(weatherResult.sys.country);
                    //console.log(weatherResult.name);

                    if (weatherResult instanceof Error) {
                        reject(weatherResult);
                    } else {
                        let WeatherArray = [];
                        try {
                            let currentweatherdetails = new currentWeatherModel(weatherResult);
                            //console.log(currentweatherdetails);

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