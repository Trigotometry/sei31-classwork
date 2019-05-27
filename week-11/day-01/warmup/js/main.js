// Path to PDF file
var PDF_URL = '../thiaoouba-prophecy.pdf';
// Specify the path to the worker

// console.log(PDFJS)
PDFJS.workerSrc = './pdf.worker.js';
//
pdfjsLib.getDocument( PDF_URL ).then( function( PDFDocumentInstance ) {

	// Use the PDFDocumentInstance To extract the text later

}, function( reason ) {
	// PDF loading error
	console.error( reason );
} );