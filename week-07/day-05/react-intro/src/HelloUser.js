import React, { Component } from 'react';

class HelloUser extends Component {
	// every React component must have a method called render()
	render() {
		// every render function must return some HTML
		console.log( this );
		return (
			<h2>Hello { this.props.name || "Mystery User"}</h2>
		);
	}
}

export default HelloUser;
