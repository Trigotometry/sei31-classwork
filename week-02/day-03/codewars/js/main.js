const squareDigits = function( num ) {

	// setup an empty array to pass in split characters
	let splitInputString = [];

	// convert input number to a string and then split the argument given at each character
	let strNum = num.toString().split( '' );

	splitInputString.push( strNum );

	for ( let i = 0; i < splitInputString.length; i += 1 ) {
		console.log( Number( splitInputString[ i ] ) );
	};
};

squareDigits( 9229 );
