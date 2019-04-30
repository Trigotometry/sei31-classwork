$( document ).ready( function() {

	$( 'form' ).on( 'submit', function( event ) {
		event.preventDefault(); // Disable navigation to a new page.

		const title = $( '#book_title' ).val();
		const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

		// // original jQuery way to handle sucess.
		// $.ajax(url, {
		// 	success: function( data ) {
		// 		const cover = data.items[ 0 ].volumeInfo.imageLinks.thumbnail;
		// 		$( '#cover' ).attr( 'src', cover );
		// 	},
		// 	error: function() {
		//
		// 	}
		// } );

		// deferred syntax - similar to 'promises' syntax
		$.ajax( url ).done( function( data ) {
			const cover = data.items[ 0 ].volumeInfo.imageLinks.thumbnail;
			$( '#cover' ).attr( 'src', cover );
		} );

	} );

} );
