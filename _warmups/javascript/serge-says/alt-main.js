const sergeSays = function( string ) {
	if ( !string ) {
		return "Fine, be that way."
	} else if ( string.endsWith("?") && string === string.toUpperCase() ) {
		return "Sure, but chill out about it."
	} else if ( string.endsWith("?") ) {
		return "Sure."
	} else if ( string === string.toUpperCase() ) {
		return "Whoa, chill out!"
	}
	return "Whatever."
}

console.log( sergeSays( "" ) );
console.log( sergeSays( "YOU GOOD?" ) );
console.log( sergeSays( "You good?" ) );
console.log( sergeSays( "OI SERGE" ) );
console.log( sergeSays( "I think we should get you a minty new iMac mate." ) );