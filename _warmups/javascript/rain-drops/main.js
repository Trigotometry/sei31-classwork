const rainDrops = function( number ) {
  if ( number % 3 === 0 ) {
    console.log('Pling');
  };
  if ( number % 5 === 0 ) {
    console.log('Plang');
  };
  if ( number % 7 === 0 ) {
    console.log('Plong');
  } else if ( number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0 ) {
    const inputConverted = number.toString();
    console.log( inputConverted );
    console.log( "Type of check: " + "'" + typeof(inputConverted) + "'" + "." );
  };
};

// function called
console.log('Passed in 105 (LCM of 7, 5 & 3) as a value, therefore below should output "Pling, Plang & Plong".');
rainDrops( 105 );
console.log('\n\nPassed in 35 (LCM of 7 & 5) as a value, therefore below should output "Plang & Plong".');
rainDrops( 35 );
console.log('\n\nPassed in 15 (LCM of 5 & 3) as a value, therefore below should output "Pling & Plang".');
rainDrops( 15 );
console.log('\n\nPassed in 7 as a value, therefore below should output "Plong".');
rainDrops( 7 );
console.log('\n\nPassed in 5 as a value, therefore below should output "Plang".');
rainDrops( 5 );
console.log('\n\nPassed in 3 as a value, therefore below should output "Pling".');
rainDrops( 3 );
console.log('\n\nPassed in 1 as a value, therefore below should output "1".');
rainDrops( 1 );

console.log('\n\n\n\nPassed in 28 as a value, therefore below should output "Plong".');
rainDrops( 28 );
console.log('\n\nPassed in 1755 as a value, therefore below should output "Pling & Plang".');
rainDrops( 1755 );
console.log('\n\nPassed in 34 as a value, therefore below should output "Pling".');
rainDrops( 34 );
