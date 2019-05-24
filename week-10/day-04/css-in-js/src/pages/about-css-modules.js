import React from 'react';
import styles from './about-css-modules.module.css';
import Container from '../components/container'

const User = ( props ) => (
	<div className={ styles.user }>
		<img src={ props.avatar } className={ styles.avatar } alt="Some User"/>
		<div className={ styles.description }>
			<h2 className={ styles.username }>{ props.username }</h2>
			<p className={ styles.excerpt }>{ props.excerpt }</p>
		</div>
	</div>
)

export default () => (
	<Container>
		<h1>About CSS Modules</h1>
		<p>CSS Modules are weird, but useful to know about.</p>
		<User
			username="Bill Murray"
			avatar="http://fillmurray.com/96/96"
			excerpt="So I got that going for me!"
		/>
		<User
			username="Vin"
			avatar="http://fillmurray.com/97/97"
			excerpt="The way of the wind."
		/>
		<User
			username="Elend Venture"
			avatar="http://fillmurray.com/98/98"
			excerpt="Headless at the end."
		/>
	</Container>
);