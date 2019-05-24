import React from 'react';
import Header from '../components/header.js'

export default() => (
	<div>
		<Header headerText="About Me"/>
		<div style={{
				color: 'cyan',
				fontSize: '2em'
			}}>
			<h2>Gatsby About Page</h2>
			<p>Lorem ipsum inserts here.</p>
			<img src='http://source.unsplash.com/random/800x200' alt='a random from unsplash' />
		</div>
	</div>
)