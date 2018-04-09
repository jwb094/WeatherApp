const rest = require('restler');
//const currentHistoricalWeatherModel = require("../models/historicalWeatherDataModel");
//const api = process.env.WEATHER_API_KEY;
class fetchHistoricalInfo {
    static fetchHistoricalWeatherData(result) {
        console.log('fetchHistoricalWeatherData ' + result);
        return new Promise(
            (resolve, reject) => {
                rest.get(`http://history.openweathermap.org/data/2.5/history/city?=lat=${result[0]}&long=${result[1]}&appid=7e3951b4f189a6c133b64aaf9abf7728`).on('complete', function(result) {
                    console.log(result);
                    if (result instanceof Error) {
                        reject(result);
                    } else {
                        resolve(result);
                        // let HistoricalWeatherArray = [];

                        // for (let element in histroicalresult) {
                        //     try {
                        //         let historicalWeatherdetails = new currentHistoricalWeatherModel(histroicalresult[element]);
                        //         HistoricalWeatherArray.push(currentweatherdetails);
                        //     } catch (e) {}
                        //     console.log(histroicalresult);
                        //     resolve(histroicalresult);
                        // }

                    }
                });
            })
    }
}

module.exports = fetchHistoricalInfo;