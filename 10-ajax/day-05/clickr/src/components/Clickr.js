import React, { Component } from 'react'

class Clickr extends Component {
	// similar to Ruby's initialize
	constructor() {
		/* oh */ super(); // IMPORTANT - always required and runs the original React Component constructor which React needs to set up.
		// now we can setup or our initial state
		this.state = {
			clicks: 0
		};
		// every event handler that needs access to 'this' should be bound in the constructor
		this._incrementClicks = this._incrementClicks.bind(this);
	}

	_incrementClicks() {
		// this.setstate.clicks += 1 // mutation: won't work
		this.setState( { clicks: this.state.clicks + 1 } )
	}

	render() {
		console.log( "render() called" );
		return (
			<button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far.</button>
		)
	}
}

export default Clickr;
