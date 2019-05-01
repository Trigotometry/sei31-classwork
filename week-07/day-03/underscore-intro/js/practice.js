const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

_(numbers).each( function( number ) {
	console.log( number );
});

const multiByFive = _(numbers).map( function( number ) {
	return number * 5;
});
console.log( multiByFive );

const add = function ( a, b ) {
	return a + b;
}

const reducedArr = _(numbers).reduce( add );
console.log(reducedArr);
