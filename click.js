const anchorTags = document.querySelectorAll('a');
anchorTags.forEach(link => {
	link.addEventListener('click', (event) => {
		var redirect = link.href;
		var myAudio = new Audio(chrome.runtime.getURL("./click.mp3"));
		myAudio.play();
		event.preventDefault();
		if (!link.hasAttribute('onclick')) {
			setTimeout(function() {
				window.location = redirect;
			}, 500);
		}
		return false;
	});
});