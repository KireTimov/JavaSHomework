$(document).ready(function () {
    
    $("button").css("background-color", "lightblue");
    $("button").css("color", "blue");
    $("button").css("border-radius", "5px" )
    $("label").css("color", "blue")
    $("input").css("background-color","lightblue");
    $("input").css("color", "blue");
    $("h1").css("color", "blue");

    $("#greetButton").click(function () {
        let name = $("#nameInput").val();
                let greeting = "Message: Hello there " + name + "!";
            $("#greetMessage").text(greeting);
           
    });
});



































