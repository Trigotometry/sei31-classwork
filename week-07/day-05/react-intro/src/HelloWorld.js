import React, { Component } from 'react';
// OR
// const Component = React.Component

// class HelloWorld extends React.Component {
class HelloWorld extends Component {
	// every React component must have a method called render()
	render() {
		return (
			<h1>Hello World!</h1>
		);
	}
}

export default HelloWorld;
