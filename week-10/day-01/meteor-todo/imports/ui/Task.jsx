import React, { Component } from 'react';

import { Task } from '../api/taks';

class Task extends Component {
	_toggleComplete = () => {
		Tasks.update( this.props.task._id, {
			$set: { complete: !this.props.task.complete }
		} );
	}

	_deleteThisTask() {
		Tasks.remove( this.props.task._id );
	}

	render() {
		const taskClassName = this.props.task.complete ? 'checked' : '';
		return (
			<li className={ taskClassName }>
				<button className="delete" onClick={ this.props._deleteThisTask.bind(this) }>
					&times;
				</button>
				<input
					type="checkbox"
					readOnly
					checked={ !! this.props.task.complete }
					onClick={ this._toggleComplete }
				/>
				<span className="text">
					{ this.props.task.text }
				</span>
			</li>
		);
	}
}
