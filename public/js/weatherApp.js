$(() => {
    $("#Submit").click((e) => {
        e.preventDefault();
        let location = $('#search').val();
        $.ajax({
                url: `/weather/${location}`,
                method: 'POST',
                data: {
                    location: $('#search').val()
                }
            })
            .then((data) => {
                console.log(data);
                let currentweather = data.result[0];
                console.log(currentweather);
                //Current Weather Info
                $("#Location").append(`<h1> ${location}</h1>`);
                $(".left-col").append(`<h3><img src="http://openweathermap.org/img/w/${currentweather.weathericon}.png"></h3>`);
                $(".left-col").append(`<h3>${currentweather.weatherdesc}</h3>`);
                $(".left-col").append(`<h3>Temperature:${currentweather.maintemp}°C</h3>`);
                $(".left-col").append(`<h3>Min Temperature:${currentweather.mintemp}°C</h3>`);
                $(".left-col").append(`<h3>Max Temperature:${currentweather.maxtemp}°C</h3>`);
                $(".right-col").append(`<br><br><br><br><br>`);
                $(".right-col").append(`<h3>Wind Speed:${currentweather.windspeed} M/S</h3>`);
                $(".right-col").append(`<h3>Wind Degree:${currentweather.winddegree}°</h3>`);
                $(".right-col").append(`<h3>Humidity:${currentweather.humidity}%</h3>`);
                $(".right-col").append(`<h3>Clouds:${currentweather.clouds}%</h3>`);


            });
    });
    $("#SubmitHD").click((e) => {
        e.preventDefault();
        let hlocation = $('#searchHD').val();
        console.log(location + 'searchhistroical');
        $.ajax({
                url: `/historical/${hlocation}`,
                method: 'POST',
                data: {
                    hlocation: $('#searchHD').val()
                }
            })
            .then((data) => {
                console.log(data);
            });
    });

});