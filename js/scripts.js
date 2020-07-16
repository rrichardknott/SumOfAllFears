

$("#errorAlert").hide();
$("#errorAlertButton").hide();

$("#submitButton").click(function () {    
    var kNumber = $("#kNumber").val();
    var firstNumber = $("#firstNumber").val();
    var secondNumber = $("#secondNumber").val();
    var thirdNumber = $("#thirdNumber").val();
    var fourthNumber = $("#fourthNumber").val();

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
        var numbers = [firstNumber, secondNumber, thirdNumber, fourthNumber];
        var answer = kNumber;
        var checkValue = 0;
        var found = false;

        for (let i = 0; i <= numbers.length - 1; i++) {
            checkValue = answer - numbers[i];
            if (numbers.indexOf(checkValue, i + 1) > -1) {
                found = true;
                return found
                break;
            }
        }
        return (found);
        $("#solveResults").text(found);
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
