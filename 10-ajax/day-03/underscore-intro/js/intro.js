console.log(_.VERSION);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// ruby style (object oriented)
_(nums).each( function( n ) {
	console.log( n );
});

// javascript style (functional programming)
_.each(nums, function ( n ) {
	console.log( n );
});

// .each() /////////////////////////////////////////////////////////////////////
_(nums).each( function( number, index, entireArray ) {
	console.log('index', index);
	console.log('entireArray', entireArray);
	console.log( number );
});

const obj = {
	4: 'four',
	5: 'five',
	6: 'six'
}

const groucho = {
	name: 'Groucho Marx',
	instrument: 'guitar',
	vice: 'cigars'
}

_(obj).each( function( value, key, entireObject) {
	console.log(`The key ${ key } has the value of ${ value }.`);
});

// .map() //////////////////////////////////////////////////////////////////////
console.log( nums );
const byFives = _(nums).map( function( n ) {
	return n * 5
});
console.log( byFives );

// .map() also works on objects
const grouchoFacts = _(groucho).map( function( v, k ) {
	return `${k}, ${v}`;
});
console.log( grouchoFacts );

// .reduce() ///////////////////////////////////////////////////////////////////
const sum = _(nums).reduce( function( runningTotal, n ) {
	console.info('runningTotal', runningTotal, 'n', n);
	return runningTotal + n;
});
console.log( nums, sum);

// .find() /////////////////////////////////////////////////////////////////////
const firstMultiplierOfFour = _(nums).find( function( n ) {
	console.info( 'considering', n );
	return n % 4 === 0;
});
console.log(firstMultiplierOfFour);

// .filter() ///////////////////////////////////////////////////////////////////
const isEven = function( n ) {
	return n % 2 === 0;
};

const evens = _(nums).filter( isEven );
console.info( evens )

// .reject() ///////////////////////////////////////////////////////////////////
const odds = _(nums).reject( isEven );
console.info( odds )

// .pluck() ////////////////////////////////////////////////////////////////////\
const bros = [
	{ name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 25},
	{ name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 32},
	{ name: 'Chico', instrument: 'piano', vice: 'infidelity', age: 40}
];

const vices = _(bros).pluck( 'vice' )
console.log(vices);

// .max() & .min() /////////////////////////////////////////////////////////////
console.log( _(nums).max() );
console.log( _(nums).min() );

// .sort() /////////////////////////////////////////////////////////////////////
console.log( _(bros).sortBy( 'vice' ) );

// .shuffle() //////////////////////////////////////////////////////////////////
console.log( _(nums).shuffle() ) ;

// .sample() ///////////////////////////////////////////////////////////////////
console.log( _(nums).sample(3) );
