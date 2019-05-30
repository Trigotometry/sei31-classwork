import React, { Component } from 'react';

// TODO:
// Create a <Time /> component that show how long the person has been on the page.

class Clock extends Component {
	constructor() {
		super();
		this.state = {
			time: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
		};

		setInterval( () => {
			this.setState({
				time: (new Date().toLocaleDateString()).toString() + " " + (new Date().toLocaleTimeString()).toString()
			});
		}, 1000);
	}

	render() {
		return (
			<h1>{ this.state.time }</h1>
		);
	}
}

export default Clock;
