function readInput() {
    var formVals = {}
    var input = document.location.search;
    input = input.replace('?', '');
    var inputParts = input.split('&');

    for (var i = 0; i < inputParts.length; i++) {
        var parts = inputParts[i].split('=');
        formVals[parts[0]] = parts[1];
    };
    return formVals;
}

var form = readInput();
console.log(form);

$.get('data.json', practice);

function practice(data) {
    //
    // debugger;

    var pracTime = parseInt(form.practice_time) * 5000 //60000, is correct 
    if (form.ability === 'beginner') {
        images(data.beginner);
        showSequenceBeginner(pracTime);
    }
    if (form.ability === 'intermediate') {
    	console.log("intermediate")
        images(data.intermediate);
        showSequenceIntermediate(pracTime);
    }
    if (form.ability === 'advanced') {
        images(data.advanced, pracTime);
        showSequenceAdvanced(pracTime);
    }
}

function images(data, userTime) {
    for (var i = 1; i <= data.length; i++) {
        $('#image-display').append('<div class="pose" id="image-' + i + '"><img class="yogapose" src="img/yoga_images/' + i + '.jpg" /></div>');
        $('.pose').hide();
        $('#thumbnails').append('<img class"thumb" class="thumbnail" id="thumbnail-image-' + i + '" src="img/yoga_images/' + i + '.jpg" />');
    }

    // $('#thumbnails').on('click',"img",function(evt){
      
    //   $('.pose').hide();

    //   var thumbnailId = $(this).attr('id');
    //   var imageId = thumbnailId.slice(10,thumbnailId.length)

    //   var selectedImage =  $("#" + imageId).show();

    //   console.log( imageId);

    // })

}


function showSequenceBeginner(userTime, selectedImage) {

	// userTime gives the variable that was passed in

  $('#thumbnail-image-1').css("border", "3px solid red");

	$('#image-1').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
    $('#thumbnail-image-1').css("border", "none");
    $('#thumbnail-image-2').css("border", "3px solid red");

	  $('#image-2').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
      $('#thumbnail-image-2').css("border", "none");
      $('#thumbnail-image-3').css("border", "3px solid red");

		$('#image-3').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
        $('#thumbnail-image-3').css("border", "none");
        $('#thumbnail-image-4').css("border", "3px solid red");

		  $('#image-4').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
          $('#thumbnail-image-3').css("border", "none");
          $('#thumbnail-image-4').css("border", "3px solid red");

				})
			})
		})
	})

}

function showSequenceIntermediate(userTime) {


  $('#thumbnail-image-1').css("border", "3px solid red");
	$('#image-1').fadeIn('slow').delay(userTime/5).fadeOut(1,function(){
	$('#thumbnail-image-1').css("border", "none");
    $('#thumbnail-image-2').css("border", "3px solid red");
		$('#image-2').fadeIn('slow').delay(userTime/5).fadeOut(1,function(){
		$('#thumbnail-image-2').css("border", "none");
        $('#thumbnail-image-3').css("border", "3px solid red");	
			$('#image-3').fadeIn('slow').delay(userTime/5).fadeOut(1,function(){
			$('#thumbnail-image-3').css("border", "none");
        	$('#thumbnail-image-4').css("border", "3px solid red");	
				$('#image-4').fadeIn('slow').delay(userTime/5).fadeOut(1,function(){
				$('#thumbnail-image-4').css("border", "none");
        		$('#thumbnail-image-5').css("border", "3px solid red");
					$('#image-5').fadeIn('slow').delay(userTime/5).fadeOut(1,function(){
					$('#thumbnail-image-4').css("border", "none");
        			$('#thumbnail-image-5').css("border", "3px solid red");
					})
				})
			})
		})
	})

}

function showSequenceAdvanced(userTime) {
  $('#thumbnail-image-1').css("border", "3px solid red");
	$('#image-1').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
	$('#thumbnail-image-1').css("border", "none");
    $('#thumbnail-image-2').css("border", "3px solid red");
		$('#image-2').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
		$('#thumbnail-image-2').css("border", "none");
      	$('#thumbnail-image-3').css("border", "3px solid red");
			$('#image-3').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
			$('#thumbnail-image-3').css("border", "none");
        	$('#thumbnail-image-4').css("border", "3px solid red");
				$('#image-4').fadeIn('slow').delay(userTime/4).fadeOut(1,function(){
				$('#thumbnail-image-3').css("border", "none");
          		$('#thumbnail-image-4').css("border", "3px solid red");
				})
			})
		})
	})

}





