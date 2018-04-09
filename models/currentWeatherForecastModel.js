class currentWeatherModel {

    constructor(obj) {
        if (!obj.weather[0].main) {
            throw new Error("Info doesn't have current weather reading");
        } else {
            this.weathermain = obj.weather[0].main;
        }

        if (!obj.weather[0].description) {
            throw new Error("Info doesn't have current weather description reading");
        } else {
            this.weatherdesc = obj.weather[0].description;
        }

        if (!obj.weather[0].icon) {
            throw new Error("Info doesn't have current weather icon reading");
        } else {
            this.weathericon = obj.weather[0].icon;
        }

        if (!obj.main.temp) {
            throw new Error("Info doesn't have current weather main temp reading");
        } else {
            this.maintemp = obj.main.temp;
        }

        if (!obj.main.temp_min) {
            throw new Error("Info doesn't have current weather min temp reading");
        } else {
            this.mintemp = obj.main.temp_min;
        }

        if (!obj.main.temp_max) {
            throw new Error("Info doesn't have current weather max temp reading");
        } else {
            this.maxtemp = obj.main.temp_max;
        }

        if (!obj.main.humidity) {
            throw new Error("Info doesn't have current weather humidity reading");
        } else {
            this.humidity = obj.main.humidity;
        }

        if (!obj.wind.speed) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.windspeed = obj.wind.speed;
        }

        if (!obj.wind.deg) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.winddegree = obj.wind.deg;
        }

        if (!obj.clouds.all) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.clouds = obj.clouds.all;
        }

        if (!obj.sys.sunrise) {
            throw new Error("Info doesn't have current weather sunrise reading");
        } else {
            //let weathersunrise = obj.sys.sunrise;
            this.sunrise = obj.sys.sunrise
        }

        if (!obj.sys.sunset) {
            throw new Error("Info doesn't have current weather sunset reading");
        } else {
            this.sunset = obj.sys.sunset;
        }

    }
}
//toISOString();s
module.exports = currentWeatherModel;