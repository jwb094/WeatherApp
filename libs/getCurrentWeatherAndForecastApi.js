const rest = require('restler');
// const to_json = require('xmljson').to_json;
//const photoModel = require("../models/currentWeatherModel");



class FetchApiData {
    static getCurrentWeather(result) {
        // ${locationLatLong[1]}
        console.log("getCurrentWeather " + result);
        return new Promise(
            (resolve, reject) => {
                //Calls the Api
                rest.get(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1`).on('complete', function(weatherResult) {
                    //if result is an error => reject the result of api call
                    if (weatherResult instanceof Error) {
                        reject(weatherResult);
                    } else {

                        console.log(weatherResult);
                        // for each item in API data photo
                        for (let i in arrayForPhotos) {
                            try {
                                // pass the JSON object to the model function in photoModel => filter unneccesary data
                                let photodetails = new photoModel(arrayForPhotos[i].$);
                                // Once the validation of data has been approved insert the variable into the array
                                photoArray.push(photodetails);
                            } catch (e) {}
                        }
                        //take parameter back to promise chain
                        resolve(photoArray);
                    }
                });
            })
    }
}
module.exports = FetchApiData;