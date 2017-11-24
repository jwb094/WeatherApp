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
                console.log(data);

            });
    })

    //
    // function initMap(data) {
    //     console.log(data);

    // }
});