$( document ).ready( () => {

	$( '#add-color' ).on( 'click', () => {
		const color = $( '#color' ).val();
		const $swatch = $( '<div />' ).addClass( 'swatch' ).css( 'background-color', color );
		$swatch.appendTo('.palette');
	} )

	// event delegation:
	// $('parent').on( 'event', 'child', ... )
	$('.palette').on('click', '.swatch', function() {
		$('.selected').removeClass('selected z');
		$(this).addClass('selected z');
	});

	$('.canvas').on('mouseover', '.pixel', function( event ) {
		// console.log( event );
		if ( event.shiftKey ) {
			const color = $('.swatch.selected').css('background-color');
			$(this).css('background-color', color);
		}
	})

} );