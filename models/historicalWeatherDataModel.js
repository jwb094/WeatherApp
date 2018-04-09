class historicalWeatherModel {

    constructor(obj) {
        if (!obj.weather) {
            throw new Error("Info doesn't have current weather reading");
        } else {
            this.weather = obj.weather;
        }

        if (!obj.main) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.main = obj.main;
        }

        if (!obj.wind) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.wind = obj.wind;
        }

        if (!obj.rain) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.rain = obj.rain;
        }


    }

}


module.exports = historicalWeatherModel;