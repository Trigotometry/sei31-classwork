// Happy Numbers
// A happy number is defined by the following process:
//
// starting with any positive integer,
// replace the number with the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.

const happy = function( num, totalHappy, arr = [] ) {

	// if the number is negative, return error message
	if ( num < 0 ) {
		return console.log( 'Number must be positive.' );
	}
	// when results array reaches the length requested, return the array
	if ( arr.length === totalHappy ) {
		return console.log( arr );
	}

	function squareNums( num ) {
		return Math.pow( +num, 2 );
	}

	const numStr = num.toString();
	let total = 0;

	// First, see if our number has more than one digit.
	if ( numStr.length > 1 ) {
		// If yes, split the number into single digits and multiply each digit by itself.
		for ( let i = 0; i < numStr.length; i += 1 ) {
			let result = squareNums( numStr[ i ] );
			// Then add up the multiplication results into a single sum, or total.
			total += result;
		}
	} else {
		// If no, multiply the number by itself to get a total.
		let result = squareNums( num );
		// Then add up the multiplication results into a single sum, or total.
		total += result;
	}

	const totalStr = total.toString();
	let totalPaired = 0;

	if ( totalStr.length > 1 ) {
		totalPaired = +totalStr[ 0 ] + +totalStr[ 1 ]
		//// See if the total, from either Step 1 operation, is a number in the list of numbers that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
		if ( totalPaired === 4 || totalPaired === 16 || totalPaired === 37 || totalPaired === 58 || totalPaired === 89 || totalPaired === 145 || totalPaired === 42 || totalPaired === 20 ) {
			//// If yes, our initial number is an unhappy number. Stop evaluating.
			return happy( num + 1, totalHappy, arr );
		} else if ( totalPaired === 1) {
			//// When the result is 1, we confirm it is a happy number. Push to array of happy numbers.
			arr.push( num );
			return happy( num + 1, totalHappy, arr );
		} else {
			//// If no, repeat this multi-digit evaluation process in Step 1 until the result is 1.
			return happy( totalPaired, totalHappy, arr );
		}
	}
	if ( totalStr.length === 1 ) {
		totalPaired = +totalStr[ 0 ];
		//// See if the total, from either Step 1 operation, is a number in the list of numbers that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
		if ( totalPaired === 4 || totalPaired === 16 || totalPaired === 37 || totalPaired === 58 || totalPaired === 89 || totalPaired === 145 || totalPaired === 42 || totalPaired === 20 ) {
			//// If yes, our initial number is an unhappy number. Stop evaluating.
			return happy( num + 1, totalHappy, arr );
		} else if ( total === 1 ) {
			//// When the result is 1, we confirm it is a happy number. Push to array of happy numbers.
			arr.push( num );
			return happy( num + 1, totalHappy, arr );
		} else {
			//// If no, repeat this multi-digit evaluation process in Step 1 until the result is 1.
			return happy( num + 1, totalHappy, arr );
		}
	}
}

happy( 10, 10 )

// Step 1
//// First, see if our number has more than one digit.
//// If yes, split the number into single digits and multiply each digit by itself. Then add up the multiplication results into a single sum, or total.
//// If no, multiply the number by itself to get a total.
// Step 2
//// See if the total, from either Step 1 operation, is a number in the list of numbers that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
//// If yes, our initial number is an unhappy number. Stop evaluating.
//// If no, repeat this multi-digit evaluation process in Step 1 until the result is 1.
//// When the result is 1, we confirm it is a happy number.




// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44