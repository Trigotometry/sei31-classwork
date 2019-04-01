// let oneEarthDay = ( 24 * 60 * 60 );
// let oneEarthYear = ( oneEarthDay * 365 ) + ( 6 * 60 );
// console.log( oneEarthDay );
// console.log( oneEarthYear );

const solarSystemAge = {
	data: {
		Earth: 1,
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	},
	earthYearCalc: function( seconds ) {

		for ( let i in this.data ) {
			let earthYears = seconds / 31557600;
			console.log( earthYears );

			let age = earthYears / this.data[ i ];
			console.log( `Your age on ${ i } is ${age}.` );
		};

	},
};

solarSystemAge.earthYearCalc( 1000000000 );

// oneYear = 365 + (24 * 0.25); // days + 1/4 day
// hoursPerYear = (365 * 24) + 6 = 8766;
// minutesPerYear = 8766 * 60 = 525,960;
// secondsPerYear = 31,557,600
