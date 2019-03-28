const beerSong = {
	remainingBottles: 0,

	bottlesLeft: function( beginningBottles ) {
		console.log( typeof beginningBottles );
		this.remainingBottles = beginningBottles;
		for ( let i = this.remainingBottles; i > 0; i -= 1 ) {

			if ( this.remainingBottles === 0 ) {
				console.log( 'test1' );
				// for ( let i = this.remainingBottles; i > 0; i -= 1 ) {
					console.log( `${ this.remainingBottles } bottle of beer on the wall, ${ this.remainingBottles } bottle of beer.\n
				Take one down, pass it around, ${ this.remainingBottles - 1} bottles of beer on the wall...` );
				// };
			} else if ( this.remainingBottles === 1 ) {
				console.log( 'test2' );
				// for ( let i = this.remainingBottles; i > 0; i -= 1 ) {
					console.log( `${ this.remainingBottles } bottle of beer on the wall, ${ this.remainingBottles } bottle of beer.\n
				Take one down, pass it around, ${ this.remainingBottles - 1} bottles of beer on the wall...` );
				// };
			} else {
				console.log("test test");
				// for ( let i = this.remainingBottles; i > 1; i -= 1 ) {
					console.log( `${ this.remainingBottles } bottles of beer on the wall, ${ this.remainingBottles } bottles of beer.\n
						Take one down, pass it around, ${ this.remainingBottles - 1 } bottles of beer on the wall...` );
				// }
			}
		}

	}
};

beerSong.bottlesLeft( 20 );
