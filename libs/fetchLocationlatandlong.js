let NodeGeocoder = require('node-geocoder');
let options = {
    provider: 'google',
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyDZRarUfLgo6UKB8TR9lCcSHlg4ch5LJC0',
    formatter: null // 'gpx', 'string', ...
};
let geocoder = NodeGeocoder(options);

class FetchlatandlongData {

    static FetchCityLatAndLongData(hlocation) {

        return new Promise(
            (resolve, reject) => {
                //get relevant data from Node geocoder = city & countryCode
                geocoder.geocode(hlocation)
                    .then(function(res) {
                        // console.log(res);
                        let lat = res[0].latitude;
                        let long = res[0].longitude;
                        resolve([lat, long]);
                    })
                    .catch(function(err) {
                        reject(err);
                    });
            });
    }
}

module.exports = FetchlatandlongData;