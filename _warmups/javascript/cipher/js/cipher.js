const cipher = {
	substitution: {
		a: 'z',
		b: 'y',
		c: 'x',
		d: 'w',
		e: 'v',
		f: 'u',
		g: 't',
		h: 's',
		i: 'r',
		j: 'q',
		k: 'p',
		l: 'o',
		m: 'n',
		n: 'm',
		o: 'l',
		p: 'k',
		q: 'j',
		r: 'i',
		s: 'h',
		t: 'g',
		u: 'f',
		v: 'e',
		w: 'd',
		x: 'c',
		y: 'b',
		z: 'a'
	},

	getKeys: function() {
	 	return Object.keys( cipher.substitution );
	}, // end getKeys()

	encrypt: function( word, output='' ) {
		letters = word.split( '' );
		// keys = this.getKeys();

		// console.log(letters);
		// console.log(keys);

			for ( let j = 0; j < letters.length; j += 1 ) {
				// for ( let i = 0; i < keys.length; i += 1 ) {
				output += this.substitution[ j ]
				// const key = keys[ i ];
				// console.log("key", key);
				// const letter = letters[ j ];
				// console.log("letter", letter);
				// console.log("output", output);
				// if ( letter === key ) {
					// output += key
				// };
			}; // end j loop
		// }; // end i loop

		console.log(output);

	}, // end ecrypt()
}

cipher.encrypt('test');
cipher.encrypt('gvhg');
