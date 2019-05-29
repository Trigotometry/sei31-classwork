const scrabbleLetterValue = {
	1: [ 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ],
	2: [ 'd', 'g' ],
	3: [ 'b', 'c', 'm', 'p' ],
	4: [ 'f', 'h', 'v', 'w', 'y' ],
	5: [ 'k' ],
	6: [ 'j', 'k' ],
	7: [ 'q', 'z' ]
};

const scrabble2 = function( word ) {

	word = word.toLowerCase();
	let score = 0;

	// console.log( word.length );
	for (let points in scrabbleLetterValue) {
		let letters = scrabbleLetterValue[points]
	}

	return score;

};

console.log( scrabble2( 'cabbage' ) );

//
// iterate over charAt[ i ]
// 	if word[ i ] === value1[ j ]
// 		score += 1;
// 	if word.charAt[ i ] ===
