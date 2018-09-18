$(function() {
  
    //on click action for submit button
    $("#user-submit-btn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        
        //grab new user info from form
        var newUser = {
            email: $("#input_email").val().trim(),
            password: $("#input_password").val().trim(),
            first_name: $("#input_firstname").val().trim(),
            last_name: $("#input_lastname").val().trim(),
            home_address: $("#input_homeAddress").val().trim(),
            phone_number: $("#input_phoneNumber").val().trim(),
            about: $("#input_about").val().trim(),
            pref_pickup: $("#input_prePickup").val().trim(),
            admin: $("#input_admin").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/users", {
            type: "POST",
            data: newUser
        }).then(
            function() {
            console.log("created new user");
            
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
});
  