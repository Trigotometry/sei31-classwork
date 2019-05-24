import React from 'react';
import Header from '../components/header.js';

export default () => (
	<div style={ {
		color: 'purple',
		fontSize: '2em'
	} }>
		<Header headerText='I love Gatsby'/>
		<h1>First Gatsby Heading</h1>
		<p>Yo-yo Ma.</p>
		<img src='http://source.unsplash.com/random/800x200' alt='a random from unsplash' />
	</div>
);
