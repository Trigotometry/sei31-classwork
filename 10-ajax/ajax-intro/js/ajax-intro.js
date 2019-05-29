const $ = document.querySelector.bind( document );
const $$ = document.querySelectorAll.bind( document );


const fetchFact = function() {
	const xhr = new XMLHttpRequest();
	
	xhr.open( 'GET', 'http://numbersapi.com/random/trivia?json' );
	xhr.send();

	xhr.onreadystatechange = function() {
		if ( xhr.readyState !== 4 ) {
			return;
		}
		const p = document.createElement('p');
		const data = JSON.parse(xhr.responseText)
		p.innerHTML = data.text;
		document.body.appendChild(p);
	};

};

document.getElementById('fetch').addEventListener( 'click', fetchFact );
