import React from 'react';
import Profile from './Profile.js'
import Clock from './Clock.js'
import Time from './Time.js'

function App() {
	return (
		<div className="App">
			<Clock />
			<Time />
			<Profile name="Groucho" age="134" motto="No gods, no masters." pic="http://fillmurray.com/400/400" />
			<Profile name="Harpo" age="55" motto="" pic="http://fillmurray.com/401/400"></Profile>
			<Profile name="Chico" age="24" motto="No gods, no masters." pic="http://fillmurray.com/400/401"></Profile>
		</div>
	);
}

export default App;
