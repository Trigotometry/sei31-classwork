// recreate the cat program in JS

const fs = require('fs'); // this is from the Node.js Standard Library
const rainbow = require('colors')

// synchronous version
const fileData = fs.readFileSync('flintstones.txt', 'utf-8');
console.log( fileData.rainbow );

// asynchronous version
// better efficiency because it's non blocking
// error first pattern:
// callback function in Node.js usually get:
// 1. error as first argument, continue if null
// 2. return the data

fs.readFile('flintstones.txt', 'utf-8', function( error, data ) {
	if ( error ) {
		return console.error( error )
	}

	console.log('data', data);
});
console.log('you will probably see this first.');

// TODO: Rewrite this code using Promises.