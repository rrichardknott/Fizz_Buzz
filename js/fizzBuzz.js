
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

