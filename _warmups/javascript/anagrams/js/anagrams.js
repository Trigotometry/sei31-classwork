const anagrams = [];

const customSort = function( word ) {
	word = word.split( '' ).sort().join( '' );

	return word;
};

const checkForAnagram = function( word, ...candidateWords ) {
	let sortedWord = customSort( word );

	for ( let i = 0; i < candidateWords.length; i += 1 ) {
		console.log( "word before sort: ", candidateWords[ i ] );
		let candidate = customSort( candidateWords[ i ] );
		console.log( "word after sort:", candidateWords[ i ] );

		if ( sortedWord === candidate ) {
			anagrams.push(candidateWords[ i ]);
		}; // if
	}; // for
	console.log(`The anagram of ${word} is ${anagrams}.`);
}; // function

console.log( checkForAnagram( 'listen', 'enlists', 'google', 'inlets', 'banana' ) );









//
// take input word
//
// split the word in an array
// sort that array alphabetically
// join that sorted array
//
// compare the sorted array
//
// if any of those equal one of the array values
// then print that out
;
