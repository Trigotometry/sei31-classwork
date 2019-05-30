const express = require( 'express' );
const ejs = require( 'ejs' );
const _ = require( 'underscore' );
const axios = require( 'axios' );

const server = express();
server.use( express.static( 'public' ) );
server.set( 'view-engine', 'ejs' );
const PORT = 1337;

server.listen( PORT, () => {
	console.log( `Now serving on http://localhost:${ PORT }` );
} );

server.get( '/', ( req, res ) => {
	console.log( 'GET req to "/"' );
	const brothers = 'Groucho Harpo Chico Zeppo Gummo'.split( ' ' );
	const randomBrother = _( brothers ).sample();
	res.render( 'home.ejs', {
		randomBrother: randomBrother
	} );
} );

server.get( '/hello/:name', ( req, res ) => {
	console.log( 'GET req to "/hello/:name"' );
	console.log( `Saying hello to ${ req.params.name }.` );
	res.render( 'home.ejs', {
		randomBrother: req.params.name
	} );
} );

server.get( '/calculator/:x/:y/:operator', ( req, res ) => {
	console.log( 'GET req to "/calculator"' );
	let answer;
	if ( req.params.operator === '+' ) {
		answer = Number( req.params.x ) + Number( req.params.y );
	} else if ( req.params.operator === '-' ) {
		answer = Number( req.params.x ) - Number( req.params.y );
	}
	res.render( 'calculator.ejs', {
		answer: answer
	} )
} )

server.get( '/info', ( req, res ) => {
	res.json( {
		name: 'Groucho',
		instrument: 'guitar',
		vice: 'cigars',
		luckyNumber: _.random( 40 )
	} );
} )

server.get( /\d+/, ( req, res ) => {
	res.send( 'You asked for a number' );
} )

server.get( '/trivia', ( req, res ) => {
	axios.get( 'http://numbersapi.com/random/trivia' ).then( ( response ) => {
		res.render( 'trivia.ejs', {
			trivia: response.data
		} );
	} );
} )