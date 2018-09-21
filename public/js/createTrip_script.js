$(document).ready(function () {
    $('#trip-submit-btn').on('click', function (e) {
        e.preventDefault();

        var data = {
            input_vanGroup_ID: window.sessionStorage.getItem('current-group-ID'),
            input_begin_time: $("#input_date").val().trim() + ' ' + $("#input_begin_time").val().trim(),
            input_driver_ID: $(".input_driver").attr('val').trim()
        }

        $.ajax("/trip/create/", {
            type: "POST", 
            data: data,
            success: function (data) {
                window.sessionStorage.removeItem('current-group-ID');
                var tripID = data.id;

                var passengers = [];

                $('.passenger-checkbox:checked').each(function (e) {
                    passengers.push($(this).attr('val'));
                });

                

                passengers.forEach(function (e) {
                    
                    passengerData = {
                        input_vanTripGroup_ID: tripID, 
                        input_passenger_ID: e
                    }

                    $.ajax("/trip/group/create", {
                        type: "POST",
                        data: passengerData,
                        sync: true
                    });
                });


                window.location.href = "/profile/" + window.sessionStorage.getItem('current-user-ID');

            
            }
        });
    });
});