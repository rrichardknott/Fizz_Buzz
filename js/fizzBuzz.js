$(document).ready(function () {

    $("#submitButton").click(function () {
        let emptyString = "";
        let firstNumber = parseInt($("#firstNumber").val());
        let lastNumber = parseInt($("#lastNumber").val());
        for (let i = firstNumber; i <= lastNumber; i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                emptyString += "Fizz Buzz! \n";
            }
            else if (i % 5 == 0) {
                emptyString += "Fizz \n";
            }
            else if (i % 3 == 0) {
                emptyString += "Buzz \n";
            }
            else {
                emptyString += i + '\n';
            }
        }
        $("#resultText").val(emptyString);
    });
    $("#clearButton").on("click", function () {
        $("#firstNumber").val("");
        $("#lastNumber").val("");
        $("#resultText").val("");
        $("#firstNumber").focus();
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


    
