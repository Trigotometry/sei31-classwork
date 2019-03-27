// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const button = document.getElementById('lib-button');

const makeMadLib = function( ) {

	const getNoun = document.getElementById('noun').value;
	const getAdjective = document.getElementById('adjective').value;
	const getName = document.getElementById('person').value;

	const story = `${ getName } really likes ${ getAdjective } ${ getNoun }.`;

	document.getElementById('story').innerHTML = story;
};

button.addEventListener('click', makeMadLib);
