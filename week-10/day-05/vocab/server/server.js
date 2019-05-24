const express = require( 'express' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

global.Vocab = require( './api/models/vocabModel' );
const routes = require( './api/routes/vocabRoutes' );

const atlasPassword = process.env.monogoAtlasPassword;

mongoose.Promise = global.Promise;
mongoose.set( 'useFindAndModify', false ); // NFI what this does, made it work.
mongoose.connect(
	`mongodb+srv://the_blade:${ atlasPassword }21@cluster0-z3xyh.mongodb.net/test?retryWrites=true`, {
		useNewUrlParser: true
	}
);

const PORT = process.env.PORT || 3000; // future proof for deployment
const server = express();

// Middleware
server.use( cors() );
server.use( bodyParser.urlencoded( {
	extended: true
} ) );
server.use( bodyParser.json() );

routes( server );
server.listen( PORT );

server.use( ( req, res ) => {
	res.status( 404 ).send( {
		url: `${ req.originalUrl } not found.`
	} )
} );

console.log( `Server started on http://localhost:${ PORT }` );