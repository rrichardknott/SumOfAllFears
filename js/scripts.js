$(document).ready(function () {

    $("#errorAlert").hide();
    $("#errorAlertButton").hide();

    $("#submitButton").click(function () {
        let kNumber = $("#kNumber").val();
        let firstNumber = $("#firstNumber").val();
        let secondNumber = $("#secondNumber").val();
        let thirdNumber = $("#thirdNumber").val();
        let fourthNumber = $("#fourthNumber").val();

        // first check to see if user left any fields blank
        if (kNumber.length == 0 || firstNumber.length == 0 || secondNumber.length == 0 || thirdNumber.length == 0 || fourthNumber.length == 0) {
            $("#errorAlertButton").show();
            $("#submitButton").hide();
            $("#clearButton").hide();
            $("#errorAlert").show().text("Did you forget to enter a number?");
            return;
        }

        // second check to see if all fields contain an integer
        if (isNaN(kNumber) || isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber) || isNaN(fourthNumber)) {
            $("#errorAlertButton").show();
            $("#submitButton").hide();
            $("#clearButton").hide();
            $("#errorAlert").show().text("Invalid Entry (numbers only)");
            return;
        }
        else {
            // create the array 
            var userArray = [kNumber, firstNumber, secondNumber, thirdNumber, fourthNumber];
    
            // perform the calculation
            //Step 3: Perform the algo
            let message = "";

            //for (number in array) {
            for (let i = 0; i < userArray.length - 1; i++) {
                //If any number in the array is larger than K we can ignore it
                if (userArray[i] > kNumber)
                    continue;

                let solution = kNumber - userArray[i]; //if K = 17 and number = 7 we have to find 10

                if (userArray.indexOf(solution, i + 1) > -1) {
                    message = `A solution was found for a K value of ${kNumber}`;
                    break;
                }
                else {
                    message = `No solution for a K value of ${kNumber} was found`;
                }
            }

            //Step 4: Print result to user
            alert(message);
            //$("#soafOut").text(message);
   
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
   

});