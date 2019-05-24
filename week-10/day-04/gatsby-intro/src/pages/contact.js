import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header.js'

export default () => (
	<div style={ { color: "pink" } }>
		<Link to="/index">Home</Link>
		<Header headerText="Contact Us"></Header>
		<p>Contact us, form coming soon.</p>
		<img src='http://source.unsplash.com/random/800x200' alt='a random from unsplash' />
	</div>
)