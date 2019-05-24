import React from 'react';
import { Link } from 'gatsby';

export default (props) => (<div>
	<nav>
		<ul>
			<li>
				<Link to="/index">Home</Link>
			</li>
			<li>
				<Link to="/about">About Us</Link>
			</li>
		</ul>
	</nav>
	<h5>{props.headerText}</h5>
</div>)