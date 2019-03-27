// body = document.body;

document.body.style.fontFamily = ( 'Arial, sans serif' )

document.getElementById( 'nickname' ).innerHTML = 'Thomas';
document.getElementById( 'favorites' ).innerHTML = 'Baked treats.';
document.getElementById( 'hometown' ).innerHTML = 'Erskineville.';

listItems = document.getElementsByTagName( 'li' );
for ( let i = 0; i < listItems.length; i += 1 ) {
	listItems[ i ].className = 'facts';
};

let billsPic = document.createElement( 'img' );
billsPic.src = 'https://www.fillmurray.com/200/300';
document.body.appendChild( billsPic );

const books = [ {
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

const ul = document.createElement('ul');

for ( let i = 0; i < books.length; i+= 1 ) {
	const book = books[ i ];
	const li = document.createElement('li');
	li.innerHTML = `${ book.title } by ${ book.author }`;
	if (book.alreadyRead === true) {
		li.style.opacity = 0.33;
	}
	document.body.appendChild(li);
}

document.body.appendChild(ul);

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
