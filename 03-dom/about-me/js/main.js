document.body.style.fontFamily = 'Arial, sans serif';

document.getElementById( 'nickname' ).innerHTML = 'Thomas H';
document.getElementById( 'favorites' ).innerHTML = 'Baked treats.';
document.getElementById( 'hometown' ).innerHTML = 'Camden.';

// listItems = document.getElementsByTagName( 'li' );
for ( let i = 0; i < document.getElementsByTagName( 'li' ).length; i += 1 ) {
	document.getElementsByTagName( 'li' )[ i ].className = 'facts'
};

let billsPic = document.createElement( 'img' );
billsPic.src = 'https://fillmurray.com/200/200';
document.getElementsByClassName( 'part1' )[ 0 ].appendChild( billsPic );

////////////////////////////////////////////////////////////////////////////////

var books = [ {
		title: 'The Design of EveryDay Things',
		author: 'Don Norman',
		alreadyRead: false
	},
	{
		title: 'The Most Human Human',
		author: 'Brian Christian',
		alreadyRead: true
	}
];

const ul = document.createElement( 'ul' );
document.getElementsByClassName( 'part2' )[ 0 ].appendChild( ul );

for ( let i = 0; i < books.length; i += 1 ) {
	const li = document.createElement( 'li' );
	li.innerHTML = `${ books[ i ].title } by ${ books[ i ].author }.`
	if ( books[ i ].alreadyRead === true ) {
		li.style.opacity = 0.25;
	}
	document.getElementsByTagName( 'ul' )[ 1 ].appendChild( li );
};
