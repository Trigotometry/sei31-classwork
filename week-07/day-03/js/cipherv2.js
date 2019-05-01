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
	encrypt: function( input ) {
		output = ''
		letters = input.split( '' );

			for ( let i = 0; i < letters.length; i += 1 ) {
				output += this.letters[ i ]
			};

		console.log(output);
	}, // end ecrypt()
}

cipher.encrypt('test');
cipher.encrypt('gvhg');
