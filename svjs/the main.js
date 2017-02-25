/**************************************
 TITLE: Simple Validation James Lewis (JL)
 CREATE DATE: 18 April 2016
 PURPOSE: Steps for Final Project
 LAST MODIFIED ON: 18 April 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY:
 Update: 21 February 2017
 ***************************************/
$(document).ready(function () {
    /* Validation plugin - Define form functionality */
    $.validator.setDefaults({
        submitHandler: function () { // Send output to screen
            //getting the values from the form
            var userFirstName = $('#firstName').val(); //Name on form
            var userLastName = $('#lastName').val(); //Name on form
            var userAddress = $('#streetAddress').val(); //Name on form
            var userPhone = $('#phoneNumber').val();
            var userDate = $('#datepicker').val();
            var userHours = $('#spinner').val();
            var userProjectDes = $('#userTextArea').val();
            var userProfession = $('input[name="profession"]').val();
            $("#myForm").validate();

            //outputting the values to the page
            $("#outputFirstName").text(userFirstName);
            $("#outputLastName").text(userLastName);
            $("#outputAddress").text(userAddress);
            $("#outputPhone").text(userPhone);
            $("#outputDate").text(userDate);
            $("#outputHours").text(userHours);
            $("#outputProjectDes").text(userProjectDes);
            $("#outputProfession").text(userProfession);
        } // end submitHandler
    }); // end validator.setDefaults
    // Use default rules and error messages when validating $("#flintstoneForm").validate();
    $("#myForm").validate();
});
