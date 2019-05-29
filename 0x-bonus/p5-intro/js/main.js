function setup() {
	createCanvas( windowWidth, windowHeight );

	background( 0 );

	// stroke( 255 );
	noStroke();

	colorMode( HSB, 255 );
	//
	// // relating to circle
	// fill( 255, 0, 0 );
	// strokeWeight( 2 );
	// ellipse( 300, 300, 200, 200 );
	//
	// // relating to line
	// line( 100, 100, 500, 500 );
	//
	// // relating to rectangle
	// fill( 0, 255, 0 );
	// rect(400, 100, 200, 200 );
	//
	// // relating to triangle
	// triangle( 250, 300, 100, 500, 400, 500 );
	//
	// // relatin gto a point
	// point( 500, 50 );
}

// this function runs approx 60 times per second
// ie every screen refresh
function draw() {
	// background( 0 ); // clear the screen each redraw

	const x = random( windowWidth );
	const y = random( windowHeight );
	const size = 50;

	const hue = frameCount % 255;

	fill( hue, 255, 255 );

	if ( keyIsDown( SHIFT )) {
		// draw a circle

		ellipse( x, y, size, size )
	}
}