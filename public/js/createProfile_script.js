$(document).ready(function () {

    //on click action to submit post for new user creation
    $("#user-submit-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //grab new user info from form
        var newUser = {
            input_email: $("#input_email").val().trim(),
            input_password: $("#input_password").val().trim(),
            input_firstName: $("#input_firstname").val().trim(),
            input_lastName: $("#input_lastname").val().trim(),
            //input_companyName: $("#input_companyName").val().trim(),
            input_homeAddress: $("#input_homeAddress").val().trim(),
            input_phoneNumber: $("#input_phoneNumber").val().trim(),
            input_prefPickup: $("#sel1").val().trim(),
            input_admin: $("#input_admin").val().trim()
        };
        console.log(newUser);

        // Send the POST request.
        $.ajax("/profile/create", {
            type: "POST",
            data: newUser,
            async: false
        }).then(
            function () {
                console.log("Created new user.");

                // Reload the page to get the updated list
                var newUser = {
                    input_email: $("#input_email").val().trim()
                }
                console.log(newUser.input_email);
        
                if (newUser.input_email != undefined) {
                    $.ajax({
                        url: "/profile/email=" + newUser.input_email,
                        async: false,
                        success: function (result) {
                            console.log(result);
                            if (result[0] != null) {
                                var userID = result[0].id;
                                sessionStorage.setItem('current-user-ID', userID);
                                window.location.href = ("/profile/" + userID);
                            }
                        }
                    });
                }
                
            }
        );
    });
});