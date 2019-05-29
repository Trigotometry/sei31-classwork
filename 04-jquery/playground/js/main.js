$( document ).ready( function() {
	$( '#name' ).on( 'keyup', function() {
		const name = $( '#name' ).val();
		$( 'header h1' ).html( `Welcome ${ name }.` )
	} ).on( 'focus', function() {
		// it's better to add or remove styles than manipulate CSS in JS.
		$( 'header' ).addClass( 'active' );
	} ).on( 'blur', function() {
		$( 'header' ).removeClass( 'active' );
	} ); // end on.keyUp

	const $bill = $( 'img' ); // caches the DOM element
	$( window ).on( 'mousemove', function( event ) {
		const opacity = ( event.clientY / window.innerHeight );
		$bill.css( 'opacity', opacity );
	} );

	const randomColor = function() {
		return Math.random() * 255;
	};

	const $body = $('body'); // caches the DOM element
	$(window).on('mousemove', function () {
		const bgColor = `rgb(${ randomColor() }, ${ randomColor() }, ${ randomColor() })`;
		$body.css('background-color', bgColor);
	});
} );
