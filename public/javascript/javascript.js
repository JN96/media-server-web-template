window.onload = function() {
	const mediaList = document.querySelector('.media-list');
	const video = document.querySelector('.viewer');
	const nowPlaying = document.querySelector('.now-playing');

	fetch('/data')
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
					response.status);
				return;
			}

			response.json().then(function(dataSrc) {
				console.log(dataSrc);
				dataSrc.forEach(src => {
					console.log(src);
					// create li tag and attributes
					var mediaListItem = document.createElement('li');
					mediaListItem.classList.add('nav-item');

					// creat a tag and attributes
					var mediaListItemLink = document.createElement('a')
					mediaListItemLink.classList.add('nav-link');
					mediaListItemLink.classList.add('text-white');
					mediaListItemLink.innerHTML = `${src}`;
					mediaListItemLink.href = `${src}`;

					mediaListItem.append(mediaListItemLink);
					mediaList.append(mediaListItem);

					// src set to prevent mime type error on page load. 
					// gets set to last src from dataSrc.
					video.src = `${src}`;
				});
			});
		}
		)
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});

	function displayPlayer(e) {
		// console.log(this.classList.value);
    	// e.stopPropagation(); // stop bubbling!
    	e.preventDefault();
    	console.log(this.textContent, this.href);
    	nowPlaying.innerHTML = "Now playing: " + this.href.split('/').pop();
    	video.src = this.href;
    }

    $(document).on('click','li a', displayPlayer);
} // end document ready