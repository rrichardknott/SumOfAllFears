$(document).ready(function () {    
    $("#errorAlert").hide();
    $("#errorAlertButton").hide();

    $("#submitButton").click(function () {        
        var kNumber = parseInt($("#kNumber").val());
        var firstNumber = parseInt($("#firstNumber").val());
        var secondNumber = parseInt($("#secondNumber").val());
        var thirdNumber =parseInt($("#thirdNumber").val());
        var fourthNumber = parseInt($("#fourthNumber").val());

        // first check to see if user left any fields blank
        if (kNumber.length == 0 || firstNumber.length == 0 || secondNumber.length == 0 || thirdNumber.length == 0 || fourthNumber.length == 0) {
            $("#errorAlertButton").show();
            $("#submitButton").hide();
            $("#clearButton").hide();
            $("#errorAlert").show().text("Did you forget to enter a number?");
            return;
        }
        // second check to see if all fields contain an integer
        else if (isNaN(kNumber) || isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber) || isNaN(fourthNumber)) {
            $("#errorAlertButton").show();
            $("#submitButton").hide();
            $("#clearButton").hide();
            $("#errorAlert").show().text("Invalid Entry (numbers only)");
            return;
        } else {            
            numbers = [firstNumber, secondNumber, thirdNumber, fourthNumber];            
            var checkValue = 0;             
            for (let i = 0; i <= numbers.length - 1; i++) {
                checkValue = kNumber - numbers[i];
                if (numbers.includes(checkValue, i + 1)) {                    
                    found = true;
                    var sweet = swal({
                        title: "Numbers Found!",
                        text: `There were two numbers within your array of numbers that added up to your Sum Number of ${kNumber}: ${checkValue} and ${numbers[i]}.`,
                        icon: "success",
                    });
                    break;
                } else {
                    found = false;
                    var sweet = swal(`Nope, didn't happen. No numbers found to add up to your Sum Number of: ${kNumber}.`);
                }                
            }
            return (found, sweet);
        }
    });    

        $("#errorAlertButton").on("click", function () {
            $("#errorAlertButton").hide();
            $("#kNumber").val("").focus();
            $("#firstNumber").val("");
            $("#secondNumber").val("");
            $("#thirdNumber").val("");
            $("#fourthNumber").val("");
            $("#submitButton").show();
            $("#clearButton").show();        
            $("#errorAlert").text("").hide();
        });

        $("#clearButton").on("click", function () {
            $("#kNumber").val("").focus();    
            $("#firstNumber").val("");
            $("#secondNumber").val("");
            $("#thirdNumber").val("");
            $("#fourthNumber").val("");
        });

    //Email Setup//
    emailjs.init("user_LwjM5EqrkyKKqnIS0Feds");

    $("#contactButton").on("click", function () {
        $("#contactButton").text("Sending...");
        var template_params = {
            "subject": $("#subject").val(),
            "message": $("#message").val(),
            "name": $("#name").val(),
            "email": $("#email").val()
        };

        if ($("#email").val().length < 10) {
            swal("Email Error!, You must enter a valid email address, error");
            $("#contactButton").text("Send");
            return;
        }

        var service_id = "default_service";
        var template_id = "emailtemplate1";
        var emailSuccess = swal({
            title: "Sent!",
            text: "Your email to Richard was successfully sent!",
            icon: "success",
        });

        emailjs.send(service_id, template_id, template_params).then(function () {
            emailSuccess;
            $("#contactButton").text("Send");
            $("#subject").val("");
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
        }, function (err) {
            swal("Error! Email not sent", "\r\n Response:\n " + JSON.stringify(err), "error");
            $("#contactButton").text("Send");
        });
        return false;
    });

});

