import React, { Component } from 'react'

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			height: 100
		};
		this._zoomIn = this._zoomIn.bind( this );
	}

	_zoomIn() {
		this.setState(
			{ height: this.state.height + 10 }
		);
	}

	_zoomOut() {
		this.setState(
			{ height: this.state.height - 10 }
		);
	}

	render() {

		const { name, age, motto, pic } = this.props;

		return (
			<div className="profile">
				<h2>{ name }'s profile coming soon.</h2>
				<h3>Age: { age }</h3>
				<p>Motto: { motto }</p>
				{ this.state.height }
				<div>
					<button onClick={ this._zoomIn }> + </button>
					<button onClick={ this._zoomOut }> - </button>
				</div>
				<img src={ pic } alt={ name } height={ this.state.height }/>
			</div>
		);
	}
}

export default Profile;
