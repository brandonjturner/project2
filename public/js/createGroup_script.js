$(document).ready(function() {
    
    $('#create-vanGroup-btn').on("click", function (e) {
        e.preventDefault();


        var vanGroup = {
            input_pickup_point: $('#input_vanRoute').val().trim()
        }     

        $.ajax("/admin/group/create", {
            type: "POST",
            data: vanGroup
        })
        .then(function () {
            res.status(200);
        });


    });
});