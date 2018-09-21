$(document).ready(function () {
    $('.join-group-btn').on('click', function (e) {
        e.preventDefault();
        console.log($(this).prev().attr("data-groupID"));

        var userData = {
            input_vanGroup_ID: $(this).prev().attr("data-groupID"),
            input_user_ID: window.sessionStorage.getItem("current-user-ID"),
            input_pickup_point: $(this).prev().attr("data-pickupPoint")
        }

        console.log(userData);
        
        $.ajax("/group/join", {
            type: "POST",
            data: userData
        })
        .then({

        });
    });
});