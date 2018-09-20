$(document).ready(function() {
    
    $('#create-vanGroup-btn').on("click", function (e) {
        e.preventDefault();
        var randomNumber = Math.floor((Math.random() * 100) + 1) * Math.floor((Math.random() * 50) + 1);
        console.log(randomNumber);
        var vanGroup = {
            input_vanGroup_ID: randomNumber,
            input_vanGroup_admin_ID: sessionStorage.getItem('current-user-ID'),
            input_pickup_point: $('#input_vanRoute').val().trim(),
            input_user_ID: sessionStorage.getItem('current-user-ID')
        }     
        console.log(vanGroup);
        $.ajax("/admin/group/create", {
            type: "POST",
            data: vanGroup
        })
        .then(function () {
            res.status(200);
        });


    });
});