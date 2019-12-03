function asciiTotaller( firstName, lastName ) {
	const fullName = `${firstName} ${lastName}`
	let asciiTotal = 0;

	// split the full name, then iterate over it
	fullName.split('').forEach((char) => {
		// convert each char and add it's ascii equivalent to the total
		asciiTotal += char.charCodeAt(0);
	});

	// visual check against output
	console.log( asciiTotal.toString(2) );
	return consecutive( asciiTotal.toString(2) );
}

function consecutive( string ) {
	// if the input binary number doens't include 0, it must occur 0 times...
	if ( string.includes('0') === false ) {
		console.log("Doesn't include any consecutive 0s.");
		return 0;
	}

	// split the total at each of the 1s
	let zeroChunksArray = string.split('1');
	// filter out any of the items in the array that aren't chunks of 0s
	let zeroesArray = zeroChunksArray.filter( item => {
		return item.includes('0')
	} );

	// setup max length of zeroes
	let consecutiveZeroes = 0;
	// iterate over the array
	zeroesArray.forEach( (item) => {
		if (item.length > consecutiveZeroes) {
			consecutiveZeroes = item.length;
		};
	} );

	return consecutiveZeroes;
};

console.log( asciiTotaller("Ann", "Other") );
console.log( asciiTotaller("Thomas", "Hexton") );
