class currentWeatherForecastModel {

    constructor(obj) {
        console.log('obj in model' + obj.list[0].main);
        if (!obj.list[0].main) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.main = obj.list[0].main;
            // console.log(this.main);
        }

        if (!obj.list[0].weather) {
            throw new Error("Info doesn't have current weather main reading");
        } else {
            this.weather = obj.list[0].weather;
            //console.log(this.weather);
        }

        if (!obj.list[0].wind) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {
            this.wind = obj.list[0].wind;
            // console.log(this.wind);
        }

        if (!obj.list[0].dt_txt) {
            throw new Error("Info doesn't have current weather wind reading");
        } else {

            this.timeanddate = obj.list[0].dt_txt;
            //console.log(this.timeanddate);
        }

    }
}

module.exports = currentWeatherForecastModel;