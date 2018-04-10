$(() => {
    $("#Submit").click((e) => {
        e.preventDefault();
        let flocation = $('#searchFD').val();
        $.ajax({
                url: `/forecast/${flocation}`,
                method: 'POST',
                data: {
                    flocation: $('#searchFD').val()
                }
            })
            .then((data) => {
                //console.log(data);
                let forecast = data.result;
                //[0].time.substr(0, 5)
                console.log(forecast);
                $("#Location").append(`<h3>${flocation}</h3>`);
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
                         <h6>${forecast[i].time.substr(0,5)}PM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                         <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '15:00:00') {
                        $(".box3").css("background-color", "#3385ff");
                        $(".box3").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}PM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                        <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '18:00:00') {
                        $(".box4").css("background-color", "#1a75ff");
                        $(".box4").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}PM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                         <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                    if (forecast[i].time === '21:00:00') {
                        $(".box5").css("background-color", "#0066ff");
                        $(".box5").append(`<h6>${forecast[i].date}</h6>
                         <h6>${forecast[i].time.substr(0,5)}PM</h6>
                         <h6><img src="http://openweathermap.org/img/w/${forecast[i].weathericon}.png"></h6>
                         <h6>MinTemp:${forecast[i].mintemp}°C MaxTemp:${forecast[i].maxtemp}°C</h6>
                         <h6>${forecast[i].weather}</h6><hr>`);
                    }
                }
            });
    });

});