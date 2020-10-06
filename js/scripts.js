$(document).ready(function () {    
    $("#errorAlert").hide();
    $("#errorAlertButton").hide();
    
    $("#kNumber, #firstNumber, #secondNumber, #thirdNumber, #fourthNumber").keypress(function (e) {
        var keycode = (e.keycode ? event.keycode : event.which);
        if (keycode == "13") {
            findTheNumbers();
        }
    });       

    $("#submitButton").click(function () {
        findTheNumbers();            
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

    //===my function=============//
    function findTheNumbers() {
        var kNumber = parseInt($("#kNumber").val());
        var firstNumber = parseInt($("#firstNumber").val());
        var secondNumber = parseInt($("#secondNumber").val());
        var thirdNumber = parseInt($("#thirdNumber").val());
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
    }
    
});