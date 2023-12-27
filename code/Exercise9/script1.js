
$(document).ready(function() {
    $("button").css("background-color", "grey");
    $("label").css("background-color", "grey");
    $("label").css("border", "2px solid");
    $("input").css("border-style", "dotted");
    $("button").css("border-radius", "10px");
    $("h1").css("background-color", "grey");
    $("h1").css("width", "350px");
    $("h1").css("border-radius", "10px");
    $("h1").css("text-align", "center");
    $("body").css("background-color", "beige");
    


    $('#btn').click( function() {
        
        $('#message').text('');

        
        let text = $('#text').val();
        let color = $('#color').val();

        
        if (text !== '' || color !== '') {
            let newHeader = $('<h3>').text(text).css('color', color);
            $('#container').append(newHeader);
        } else {
            
            $('#message').text('Please enter text and color.');
            
            
        }
    });
});