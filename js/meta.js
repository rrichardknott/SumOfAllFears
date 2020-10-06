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