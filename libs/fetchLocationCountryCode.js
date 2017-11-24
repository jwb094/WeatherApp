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

        return new Promise(
            (resolve, reject) => {
                //get relevant data from Node geocoder = city & countryCode
                geocoder.geocode(location)
                    .then(function(res) {
                        let city = res[0].city;
                        let countryCode = res[0].countryCode;
                        resolve([city, countryCode]);
                    })
                    .catch(function(err) {
                        reject(err);
                    });
            });
    }
}

module.exports = FetchData;