

function readInput() {
	var input = document.location.search;
	input = input.replace("?", "");
	var inputParts = input.split("&");

	for (var i = 0; i < inputParts.length; i++) {
		var parts = inputParts[i].split("=");
		console.log(parts);
	};
} 

readInput();


function images() {
	for (var i = 1; i < 9; i++) {
		$('#image-display').append('<img src="img/yoga_images/' + i + '.jpg" />');

	}
}
images();




