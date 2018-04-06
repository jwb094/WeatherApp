$(() => {

    //System recieves Request data from client side
    $("#Submit").click((e) => {
        e.preventDefault();
        let location = $('#search').val();
        console.log(location);
        $.ajax({
                url: `/weather/${location}`,
                method: 'POST',
                data: {
                    location: $('#search').val()
                }
            })
            //System sends Response information
            //calls the method which requires information as parameter
            .then((data) => {
                //console.log(data);
                let currentweather = data.result[0];
                let forecast = data.result[1];
                console.log(currentweather[0].main[0]);
                console.log(forecast);
                $("#Location").append(`<h1> ${location}</h1>`);
                $("#currentweatherdetails").append(`<li> <img height="150" width="150" src="http://openweathermap.org/img/w/${currentweather[0].weather[0].icon}.png"></li>`);
                $("#currentweatherdetails").append(`<li><h2>${currentweather[0].weather[0].description}</h2></li>`);
                $("#currentweatherdetails").append(`<li><h2>Min Temperature:${currentweather[0].main.temp_min}°C</h2></li>`);
                $("#currentweatherdetails").append(`<li><h2>Max Temperature:${currentweather[0].main.temp_max}°C</h2></li>`);
                $("#currentweatherdetails").append(`<li><h3>Humidity:${currentweather[0].main.humidity}%</h3></li>`);
                $("#currentweatherdetails").append(`<li><h3>${currentweather[0].wind.speed}</h3></li>`);


            });
    })

    //
    // function initMap(data) {
    //     console.log(data);

    // }
});