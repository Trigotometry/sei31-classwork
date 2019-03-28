const videos = document.querySelectorAll( 'li a' );

// define empty array for URLs
const videoURLs = [];
const thumbNailURLs = [];

for ( let i = 0; i < videos.length; i += 1 ) {
	// push a tag URLs to array
	videoURLs.push( videos[ i ].getAttribute( 'href' ) );
	thumbNailURLs.push( youtube.generateThumbnailUrl( videoURLs[ i ] ) );

	image = document.createElement( 'img' );
	image.setAttribute( 'src', thumbNailURLs[ i ] );

	videos[ i ].appendChild( image )
}

////////////////////////////////////////////////////////////////////////////////
// v2

const links = document.querySelectorAll( 'li a' );

for ( let i = 0; i < links.length; i += 1 ) {
	const videoURLsV2 = links[ i ].getAttribute( 'href' );
	const thumbnailURLsV2 = youtube.generateThumbnailUrl( videoURLsV2 );

	const thumbnail = document.createElement( 'img' );
	thumbnail.setAttribute( 'src', thumbnailURLsV2 );

	links[ i ].appendChild( thumbnail )
}
