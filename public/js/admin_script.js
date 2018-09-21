$(document).ready(function () {

    //on click action to submit post for new group creation
    $("#group-submit-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //grab new user info from form
        var newGroup = {
            input_user_ID: $("#input_user_ID").val().trim(),
            input_pickup_point: $("#input_pickup_point").val().trim(),
        };

        // Send the POST request.
        $.ajax("/admin/group/create", {
            type: "POST",
            data: newGroup
        }).then(
            function () {
                console.log("Created new group.");


                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    

    //on click action to submit put for a group 
    $("#update-group-submit-btn").on("click", function (event) {

    });

});