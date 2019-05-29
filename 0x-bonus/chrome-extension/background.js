chrome.browserAction.onClicked.addListener( function(tab) {

	const colors = ["red", "orange", "yellow", "gree", "blue", "violet"];

	const colorPicker = () => {
		const randomIndex = Math.floor(Math.random() * color.length);
		return colors[randomIndex];
	}

	chrome.tabs.executeScripts({
		code: 'document.body.style.backgroundColor="' + colorPicker() + '"'
	});
});
