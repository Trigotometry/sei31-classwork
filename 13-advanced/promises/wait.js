// setTimeout expects a callback - it does not use Promises

// Make this work:
// return new Promise( resolve => setTimeout( resolve, duration )

const wait = ( duration ) => {
	// do promise stuff
	return new Promise( ( resolve, reject ) => {
		setTimeout( resolve, duration );
	} );
};

// A promise wrapper around readFile
const readFile = ( filename ) => {
	// do promise stuff
	return new Promise( ( resolve, reject ) => {
		fs.readFile( filename, 'utf-8', ( err, content ) => {
			if ( err ) {
				reject( err );
				return;
			}
			resolve( content );
		} );
	} );
};

// wait returns a Promise
wait( 2000 ).then( () => {
	console.log( '2 second has passed.' );
} ).catch( ( error ) => {
	console.error( error );
} );