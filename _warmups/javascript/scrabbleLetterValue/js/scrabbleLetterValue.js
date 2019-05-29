const scrabbleLetterValue = {
	value1: [ 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ],
	value2: [ 'd', 'g' ],
	value3: [ 'b', 'c', 'm', 'p' ],
	value4: [ 'f', 'h', 'v', 'w', 'y' ],
	value5: [ 'k' ],
	value6: [ 'j', 'k' ],
	value7: [ 'q', 'z' ]
};

const scrabble = function( word ) {

	word = word.toLowerCase();
	let score = 0;

	for ( let i = 0; i < word.length; i += 1 ) {
		for ( let j = 0; j < scrabbleLetterValue.value1.length; j += 1 ) {
			if ( word[ i ] === scrabbleLetterValue.value1[ j ] ) {
				score += 1;
			};
			if ( word[ i ] === scrabbleLetterValue.value2[ j ] ) {
				score += 2;
			};
			if ( word[ i ] === scrabbleLetterValue.value3[ j ] ) {
				score += 3;
			};
			if ( word[ i ] === scrabbleLetterValue.value4[ j ] ) {
				score += 4;
			};
			if ( word[ i ] === scrabbleLetterValue.value5[ j ] ) {
				score += 5;
			};
			if ( word[ i ] === scrabbleLetterValue.value6[ j ] ) {
				score += 6;
			};
			if ( word[ i ] === scrabbleLetterValue.value7[ j ] ) {
				score += 7;
			};
		}
	}

	return score;

};

console.log( scrabble( 'cabbage' ) );

//
// iterate over charAt[ i ]
// 	if word[ i ] === value1[ j ]
// 		score += 1;
// 	if word.charAt[ i ] ===
