let NodeGeocoder = require('node-geocoder');
let options = {
    provider: 'google',


    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyDZRarUfLgo6UKB8TR9lCcSHlg4ch5LJC0',
    formatter: null // 'gpx', 'string', ...
};

let geocoder = NodeGeocoder(options);

class FetchData {

    static FetchCityAndCCData(location) {
        console.log("libs " + location);
        return new Promise(
            (resolve, reject) => {
                //the entered data is used to find relevant data, e.g. longitude,latitude, city 
                geocoder.geocode(location)
                    .then(function(res) {
                        console.log(res);
                        //collect assign variable to collect city & countryCode 
                        let city = res[0].city;
                        let countryCode = res[0].countryCode;
                        console.log(city);
                        console.log(countryCode);

                        resolve([city, countryCode]);
                    })
                    .catch(function(err) {
                        reject(err);
                    });
            });
    }
}

module.exports = FetchData;