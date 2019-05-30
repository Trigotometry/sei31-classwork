const http = require('http'); // Node standard libraries

// this callback runs every time an HTTP request hits the server
// req has information about the request
// res is the response object: do stuff to res to send the response
http.createServer( ( request, response ) => {
	console.log(`Serving request: ${ request.method }, ${ request.url }`);
	response.writeHeader( 200, { 'Content-Type': 'text/json' } );

	if (request.url === '/north' ) {
		response.end('No kings up here.')
	} else if ( request.url === '/sansa' ) {
		response.end('I miss the fam.')
	} else {
		response.end('Hello?')
	}
}).listen( 6789 );

console.log('Server is running at http://localhost:6789/');