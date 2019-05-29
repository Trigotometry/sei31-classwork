import React, { Component } from 'react';

class Time extends Component {
	constructor() {
		super();

		this.state = {
			startTime: new Date().getTime(),
			currentTime: new Date().getTime(),
			elapsedTime: "00:00:00"
		}

		setInterval( () => {
			// console.log( "Current: ", this.state.currentTime )
			this.setState({
				currentTime: new Date().getTime()
			});
		}, 1000);

		setInterval( () => {
			let measuredTime = new Date(null);
			measuredTime.setSeconds( Math.round( ( this.state.currentTime - this.state.startTime ) / 1000 ) );
			let elapsed = measuredTime.toISOString().substr(11, 8);
			this.setState({
				elapsedTime: elapsed
			});
		}, 1000);

	}

	render() {
		return (
			<div>
				<h2>{ this.state.elapsedTime }</h2>
			</div>
		);
	}
}

export default Time;

// save the time of page tload to state variable
// subtract the current time from the page load time
// print the different as the elapsed time
