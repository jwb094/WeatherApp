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
                let currentweather = data.result[0];
                let forecast = data.result[1];
                //Current Weather Info
                // $("#Location").append(`<h1> ${location}</h1>`);
                // $("#currentweatherdetails").append(`<li> <img src="http://openweathermap.org/img/w/${currentweather[0].weather[0].icon}.png"></li>`);
                // $("#currentweatherdetails").append(`<li><h2>${currentweather[0].weather[0].description}</h2></li>`);
                // $("#currentweatherdetails").append(`<li><h2>Min Temperature:${currentweather[0].main.temp_min}°C</h2></li>`);
                // $("#currentweatherdetails").append(`<li><h2>Max Temperature:${currentweather[0].main.temp_max}°C</h2></li>`);
                // $("#currentweatherdetails").append(`<li><h3>Humidity:${currentweather[0].main.humidity}%</h3></li>`);
                // $("#currentweatherdetails").append(`<li><h3>Speed:${currentweather[0].wind.speed} M/S</h3></li>`);

                $(".title").append(`<h3> Next Five Days </h3><br>`);
                //Current Forecast Info
                for (var i in forecast) {
                    if (forecast[i].time === '09:00:00') {
                        $(".box1").css("background-color", "#66a3ff");
                        $(".box1").append(`<h6>${forecast[i].date}</h6>
                        <h6>${forecast[i].time.substr(0,5)}AM</h6>
                        <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                        <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                        <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '12:00:00') {
                        $(".box2").css("background-color", "#4d94ff");
                        $(".box2").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}AM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                         <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '15:00:00') {
                        $(".box3").css("background-color", "#3385ff");
                        $(".box3").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}AM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                        <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '18:00:00') {
                        $(".box4").css("background-color", "#1a75ff");
                        $(".box4").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}AM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                         <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '21:00:00') {
                        $(".box5").css("background-color", "#0066ff");
                        $(".box5").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}AM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                         <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                }
            });
    });

});