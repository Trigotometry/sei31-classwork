let	content = '';

// loop through the available characters
for ( let i = 0; i < 2 ** 14; i+= 1 ) {
	content += String.fromCharCode( i );
};

document.body.innerHTML = content;
