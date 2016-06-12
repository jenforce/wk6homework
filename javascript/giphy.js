$(document).ready(function() {
	var gifThings=[];
	var arrayThings = ['bob','cat','waterfall'];
	var thing;
	renderButtons();

 $('.bthing').on('click', function() {
 	thing = this.id
    console.log(this);
	 	if(thing === 'thingSubmit'){
	 		thing = $('#thing-input').val();
             arrayThings.push(thing);
            	   console.log(this);
	 		gifCall(thing);
         	renderButtons();
	 	}else{

         	gifCall(thing);
	 		console.log(thing);
	 	}
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
                             var thingImage = $('<img>');
                             var gifId = results[i].id;
                               gifThings.push(gifId);
                                 console.log(gifId); 
                                 thingImage.attr('src', results[i].images.original_still.url);               
                           		 gifDiv.append(p)
                            	 gifDiv.append(thingImage) 
                            $('#thingsGoHere').prepend(gifDiv);  
                          }
                        }
            }); // end .done(function(response)
}// end function gifCall(thing)

function renderButtons(){ 
    $('#buttonCollection').empty();
    for (var i = 0; i < arrayThings.length; i++){
        var a = $('<button>') 
        a.addClass('bthing');
		a.attr('id',arrayThings[i]);
        a.attr('data-name', arrayThings[i]); 
        a.text(arrayThings[i]); 
        $('#buttonCollection').append(a); 
    }
}

});   //end $(document).ready(function()

/*
 //personImage.attr('src', results[i].images.fixed_height.url);
*/
