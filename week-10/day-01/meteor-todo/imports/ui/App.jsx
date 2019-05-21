import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks';

import Task from './Task';

class App extends Component {
	constructor() {
		super();
		this.state = {
			hideCompleted: false
		};
	}

	toggleHideCompleted() {
		this.setState({

		})
	}

	handleSubmit( event ) {
		event.preventDefault();

		// get the task textInput
		const text = ReactDOM.findDOMNode( this.refs.textInput ).value.trim();
		Tasks.insert({
			text, // equivalent to "text: text"
			createdAt: new Date()
		});

		// MUTATION AND TOUCHING THE DOM, VERY NAGHTY
		ReactDOM.findDOMNode( this.refs.textInput ).value = '';
	}

	renderTasks() {
		let filteredTasks = this.props.tasks;

		if ( this.state.hideCompleted ) {
			filteredTasks = filteredTasks.filter( task => !task.complete );
		}

		return filteredTasks.map((task) => (
			<Task key={task._id} task={task} />
		));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
					<label className="hide-completed">
						<input
							type="text"
							readOnly
							checked={ this.state.hideComplete }
							onClick={ this.toggleHideCompleted.bind(this) }
						/>
						Hide completed tasks.
					</label>
					<form className="new-task" onSubmit={ this.handleSubmit.bind(this) }>
						<input
							type="text"
							ref="textInput"
							placeholder="Type here to add a task."
						/>
					</form>
				</header>

				<ul>
					{this.renderTasks()}
				</ul>
			</div>
		)
	}
}

export default withTracker(() => {
	return {
		tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
	}
})(App);
