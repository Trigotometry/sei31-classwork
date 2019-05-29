// Text Soup 3: The Final Chapter
// Make a few modifications to the code from Text Soup 2 (make a copy, don't edit the version in the homework repo!), to cause the random words to be sourced dynamically via AJAX from Wikipedia, instead of from a hidden DIV already present in the HTML.
//
// Your code should allow the user to specify a Wikipedia page name via a querystring field in the URL, such as index.html?page=Donald+Trump, whose contents will then be loaded via the Wikipedia API.
//
// (SO is your friend, and so is Google.)

$( document ).ready( function() {


	$('#wikiWordSubmit').on('click', function( e ) {
		e.preventDefault();

		const searchTerm = $('#wikiWord').val();

		$.getJSON( "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", { page: searchTerm } )
			.done( response => {
				let wikiHTML = response.parse.text["*"];
				let text = $( '<div>' ).html( wikiHTML ).text();
				let words = text.split(/[ ,."';\n\-]/)
				// console.log( words );
			})
	} );

	// store the body in a variable to use later when appending
	const $body = $( 'body' );

	// helper function to return a number between 0 and max
	const random = function( max ) {
		return Math.floor( Math.random() * max );
	}

	// Our main function to randomly put a word on the page
	const putWord = function() {

		// Get a random word from our array, using our random helper funcion, with the word array length as the maximum value
		const randomIndex = random( words.length );

		// select random word
		const text = words[ randomIndex ];

		// Insert the random word as the content of a new div
		const $div = $( '<div class="word">' ).html( text );

		// customize the divs css properties
		$div.css( {
			top: random( window.innerHeight ) + "px",
			left: random( window.innerWidth ) + "px",
			fontSize: ( 40 + random( 80 ) ) + "px",
			color: "rgb(" + random( 255 ) + "," + random( 255 ) + "," + random( 255 ) + ")",
			transform: "rotate(" + random( 360 ) + "deg)"
		} )

		// apppend the new $div to the body
		$div.appendTo( $body );

		// make the text fade in and fade out of the screen
		$div.fadeIn( 1000 ).fadeOut( 2000, function() {
			$( this ).remove();
		} )
	}

	// putWord()
	// setInterval( putWord, 100 );

} );