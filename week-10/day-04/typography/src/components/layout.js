import React from 'react';
import { Link } from 'gatsby';

// const { children } = props; // destructuring
const NavLink = ( props ) => (
	<li style={ { display: 'inline-block', marginRight: '1em' } }>
		<Link to={ props.to }>{ props.children }</Link>
	</li>
);

export default ( { children } ) => (
	<div style={ { margin: '3em auto', maxWidth: '650px', padding: '0 1em' } }>
		<header>
			<Link to="/"></Link>
			<h3 style={ { display: 'inline' } }>My Crazy Site</h3>
		<ul>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</ul>
	</header>
		{ children }
	</div>
);