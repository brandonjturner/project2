$(function() {
  
    //on click action for submit button
    $("#user-submit-btn").on("click", function(event) {
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
    
        // Send the POST request.
        $.ajax("/profile/create", {
            type: "POST",
            data: newUser
        }).then(
            function() {
            console.log("Created new user.");
            
            
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
});
  