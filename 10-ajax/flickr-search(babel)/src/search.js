const showImages = function( results ) {
	// 'nested' AKA helper function that returns a thumbnail URL for a given photo object.
	const generateThumbnailURL = function( p ) {
		return [
			'http://farm',
			p.farm,
			'.static.flickr.com/',
			p.server,
			'/',
			p.id,
			'_',
			p.secret,
			'_q.jpg' // Change 'q' to something else for different sizes
		].join( '' );
	}

	const generateOriginalURL = function( p ) {
		return [
			'https://www.flickr.com/photos/',
			p.owner,
			'/',
			p.id
		].join( '' );
	}

	// debugger
	// process the results
	results.photos.photo.forEach( function( photo ) {
		const thumbnailURL = generateThumbnailURL( photo );
		const originalURL = generateOriginalURL( photo );
		const $img = $( '<img>', {
			src: thumbnailURL
		} );
		$img.appendTo( '#images' );
		$img.wrap( $('<a>', {
			href: originalURL
		}) );
	} );
};


const searchFlickr = function( terms ) {
	const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

	$.getJSON( flickrURL, {
		method: 'flickr.photos.search',
		api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
		text: terms,
		format: 'json',
		per_page: 60,
		page: state.pageRequested += 1
	} ).done( function( data ) {
		if ( state.pageRequested <= data.photos.pages ) {
			showImages( data );
			state.ajaxReady = true;
		} else {
			state.ajaxReady = false;
			return
		}
	} );
};

const state = {
	pageRequested: 0,
	ajaxReady: true
}

$( document ).ready( function() {
	$( '#search' ).on( 'submit', function( event ) {
		event.preventDefault(); // Stay on this page.

		const query = $( '#query' ).val();
		$( '#images' ).empty();
		state.pageRequested = 0;
		searchFlickr( query );
	} );

	$( window ).scroll( function() {
		if ( !state.ajaxReady ) {
			return
		};

		hiddenAbove = ( $( document ).height() - $( window ).height() );

		if ( $( window ).scrollTop() >= hiddenAbove * 0.9 ) {
			state.ajaxReady = false;
			const query = $( '#query' ).val();
			searchFlickr( query );
		}

	} );
} );
