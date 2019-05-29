// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.

// /////////////////////////////////////////////////////////////////////////////
// Tom Attempt

// const allergies = {
// 	scorecard: {
// 		1: "eggs",
// 		2: "peanuts",
// 		4: "shellfish",
// 		8: "strawberries",
// 		16: "tomatoes",
// 		32: "chocolate",
// 		64: "pollen",
// 		128: "cats"
// 	},
// 	allergyCalc: function( name, number ) {
// 		for ( let i = 0; i < Object.keys( this.scorecard ).length; i += 1 ) {
// 				if ( number === parseInt(Object.keys( this.scorecard )[ i ]) ) {
// 				console.log( `${ name } is allergic to ${ Object.values( this.scorecard )[ i ] }.` );
// 			} else {
// 				console.log(Object.keys( this.scorecard )[ i ]);
// 				// console.log('wtf is wrong.');
// 			};
// 		};
// 	},
// };

// /////////////////////////////////////////////////////////////////////////////
// Yianni Attempt

const allergens = {
	scorecard: {
		1: "eggs",
		2: "peanuts",
		4: "shellfish",
		8: "strawberries",
		16: "tomatoes",
		32: "chocolate",
		64: "pollen",
		128: "cats"
	},
	getKeys: function() {
		const allergyKeys = Object.keys( this.scorecard ).map(Number).reverse();
		console.log( allergyKeys );
		return allergyKeys;
	},
	getList: function( score ) {
		const keys = this.getKeys();

		let allergies = [];

		for ( let i = 0; i < keys.length; i += 1 ) {
			const key = keys[ i ];
			if (score >= key) {
				allergies.push(this.scorecard[key]);
			}
		}
	}
}

allergens.getKeys();
// allergens.allergyCalc( 'Tom', 32 );
