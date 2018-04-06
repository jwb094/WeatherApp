class currentFiveDayWeatherForecastModel {

    constructor(obj) {
        if (!obj.main.temp_min) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.mintemp = obj.main.temp_min;
            // console.log(this.main);
        }

        if (!obj.main.temp_max) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.maxtemp = obj.main.temp_max;
            // console.log(this.main);
        }

        if (!obj.main.humidity) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.humidity = obj.main.humidity;
            // console.log(this.main);
        }

        if (!obj.weather) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.weather = obj.weather;
            // console.log(this.weather);
        }

        /* if (!obj.weather) {
             throw new Error("Info doesn't have current weather main reading");
         } else {
             this.weather = obj.weather;
            // console.log(this.weather);
    }*/

        /*if (!obj.wind.speed) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.windspeed = obj.wind.speed;
            // console.log(this.wind);
        }*/

        if (!obj.dt_txt) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.timeanddate = obj.dt_txt;
            //  console.log(this.timeanddate);
        }

    }
}

module.exports = currentFiveDayWeatherForecastModel;