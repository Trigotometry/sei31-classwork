import React from 'react';
import containerStyles from './container.module.css' // This actually imports a class name.

export default ( props ) => (
	<div className={ containerStyles.container }>
		{ props.children }
	</div>
);