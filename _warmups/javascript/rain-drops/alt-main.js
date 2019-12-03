const rainDrop = function( number ) {
	let string = "";
	let factorFound = false;

	if ( number % 3 === 0 ) {
		string += "Pling";
		factorFound = true;
	}
	if ( number % 5 === 0 ) {
		string += "Plang";
		factorFound = true;
	}
	if ( number % 7 === 0 ) {
		string += "Plong";
		factorFound = true;
	}
	if ( !factorFound ) {
		return `No factors for "${ number.toString() }".`;
	}

	return string;
};

console.log( rainDrop( 28 ) );
console.log( rainDrop( 1755 ) );
console.log( rainDrop( 34 ) );
console.log( rainDrop( 105 ) );