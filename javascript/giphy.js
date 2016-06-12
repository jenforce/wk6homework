 $(document).ready(function() {
var gifThings=[];
var arrayThings = [];
var thing;
  
 $(".bthing").on('click', function() {
         thing = $('#thing-input').val();
          arrayThings.push(thing);
          gifCall(thing);
          renderButtons();
                    console.log(arrayThings.length);    
                    console.log(thing);
    });

function gifCall(thing){

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({url: queryURL, method: 'GET'})         
             .done(function(response) {
                var results = response.data;
                       for(var i=0; i < results.length; i++){
                           if (results[i].rating == "r" || results[i].rating == "pg-13"){
                          }
                        else {
                             var gifDiv = $('<div class="bthing">');
                             var rating = results[i].rating;
                             var p = $('<p>').text( "Rating: " + rating);
                             var personImage = $('<img>');
                             var gifId = results[i].id;
                            gifThings.push(gifId);
                              console.log(gifId); 
//personImage.attr('src', results[i].images.fixed_height.url);
                            personImage.attr('src', results[i].images.original_still.url);               
                            gifDiv.append(p)
                            gifDiv.append(personImage) 
                            $('#gifsAppearHere').prepend(gifDiv);    
        
                          }
                        }
            }); // .done(function(response) {
    //return false;
}

    function renderButtons(){ 
        $('#buttonCollection').empty();
        for (var i = 0; i < arrayThings.length; i++){
            var a = $('<button>') 
            a.addClass('bthing');
            a.attr('data-name', arrayThings[i]); 
            a.text(arrayThings[i]); 
            $('#buttonCollection').append(a); 
        }
    }
});    // $(document).ready(function()



