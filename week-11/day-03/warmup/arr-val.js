// const arrVal = function( arr, sum ) {
//
// 	for ( let i = 0; i < arr.length; i += 1 ) {
// 		for ( let j = i + 1; j < arr.length; j += 1 ) {
// 			if ( arr[i] + arr[j] === sum ) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }


const arrVal = function( arr, sum, i = 0, j = 1 ) {

	if ( i >= arr.length ) {
		return;
	}

	if ( arr[ i ] + arr[ j ] !== sum && arr.length <= j ) {
		arrVal( arr, i, j += 1 )
	} else {
		arrVal( arr, i += 1, 0 )
	}
}


console.log(arrVal( [3, 5, 1, 4], 9 ));
