const primeFactors = function( num, arr = [], divisor = 0 ) {

	const isDivisorPrime = function( divisor ) {
		if ( divisor <= 1 ) {
			return false;
		};
		// check for number 2 and 3
		if ( divisor <= 3 ) {
			return true;
		};
		if ( divisor % 2 == 0 || divisor % 3 == 0 ) {
			return false;
		};
		for ( let i = 5; i * i <= divisor; i = i + 6 ) {
			if ( divisor % i == 0 || divisor % ( i + 2 ) == 0 ) {
				return false;
			};
		};
		return true;
	}

	if ( isDivisorPrime( divisor ) ) {
			num /= divisor;
			arr.push( divisor );
			console.log( arr );
			divisor += 1;
		return primeFactors( num, arr, divisor );
	} else {
		divisor += 1;
		return primeFactors( num, arr, divisor );
	}

};

primeFactors( 60 );
