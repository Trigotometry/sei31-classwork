$( document ).ready( function() {

	// select the div
	// split the element at each '", "'

	const words = $('#words').text().split(' ');

	const random = function(max) {
		return Math.floor(Math.random() * max);
	}

	const putWord = function() {
		const randomIndex = random(words.length);
		console.log(randomIndex);
	}

	const $div = $('<div class="word">').html(text);

});
