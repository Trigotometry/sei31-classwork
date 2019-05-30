const readline = require( 'readline' );
const chalk = require( 'chalk' );
const figlet = require( 'figlet' );

// it really IS this much trouble
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('Enter your string: ', ( response ) => {
	console.log(
		chalk.green(
			figlet.textSync( response, {
			font: 'slant',
			horizontalLayout: 'default',
			verticalLayout: 'default'
			})
		)
	);
	rl.close();
});