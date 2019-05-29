// Callback Review

// A callback is a function passed into another function which calls that first
// function for you, at some later point in time.

console.log('A: before setTimeout');
setTimeout( function() {
	console.log('B: time has passed...');
}, 4000);
console.log('C: after setTimeout');
