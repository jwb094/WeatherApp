class currentFiveDayWeatherForecastModel {

    constructor(obj) {
        if (!obj.dt_txt) {
            throw new Error("Info doesn't have current weather date reading");
        } else {
            this.date = obj.dt_txt.substr(0, 10);
            //  console.log(this.timeanddate);
        }

        if (!obj.dt_txt) {
            throw new Error("Info doesn't have current weather time reading");
        } else {
            this.time = obj.dt_txt.substr(11, 16);
            //  console.log(this.timeanddate);
        }

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
            this.weather = obj.weather[0].description;
            // console.log(this.weather);
        }

        if (!obj.weather) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.weathericon = obj.weather[0].icon;
            // console.log(this.weather);
        }
    }
}

module.exports = currentFiveDayWeatherForecastModel;