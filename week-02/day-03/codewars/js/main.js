const squareDigits = function( num ) {

	let inputString = num.toString().split( '' );

	const squaredNumberArray = [];

	for ( let i = 0; i < inputString.length; i += 1 ) {
		squaredNumberArray.push(Number( inputString[ i ] ) * Number( inputString[ i ] ) );
	};

	return Number(squaredNumberArray.join(''))

};
