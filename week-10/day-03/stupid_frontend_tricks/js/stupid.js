$( document ).ready( () => {
	// Parallax ////////////////////////////////////////////////////////////////
	// caching
	const $bill = $( '.bill-js' );
	const $body = $( 'body' );

	$( window ).on( 'scroll', () => {
		const scrollTop = $( window ).scrollTop();
		$bill.css( 'background-position-y', -scrollTop * 0.5 );
		$body.css( 'background-position-y', -scrollTop / 3 );
	} );

	// Bubble //////////////////////////////////////////////////////////////////

	$( window ).on( 'mousemove', ( event ) => {
		const { pageX: x, pageY: y } = event;

		const size = Math.random() * 10 * Math.random();

		const $bubble = $( '<div class="bubble" />' ).css( {
			top: y,
			left: x,
			width: size + 'em',
			height: size + 'em'
		} );

		$bubble.appendTo( 'body' );

		// Custom Animation;
		$bubble.animate( {top: -161 }, 4000, () => {
			// Clean up the DOM elements.
			$bubble.remove()
		} );
	} );
} );