$( document ).ready( function() {

	// const updateBrother = function() {
	// 	$('#brother').load('/api/brother');
	// };
	// setInterval( updateBrother, 3000 );
	// updateBrother();
	//
	// const updateTime = function() {
	// 	$.get('/api/time').done( function( result ) {
	// 		$('#time').text( result );
	// 	});
	// };
	// setInterval( updateTime, 1000 );
	// updateTime();
	//
	// const updateUptime = function() {
	// 	$.get('/api/uptime').done( function( result ) {
	// 		$('#uptime').text( result );
	// 	});
	// };
	// setInterval( updateUptime, 5000 );
	// updateUptime();

	const getInfo = function() {
		$.getJSON('/api/info').done( function( data ) {
				console.log( data );
		});
	}
	getInfo();

	const updateFortune = function() {
		$.get('/api/fortune').done( function( result ) {
			$('#fortune').text( result );
		});
	};
	setInterval( updateFortune, 10000 );
	updateFortune();

} );
