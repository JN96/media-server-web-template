window.onload = function() {
	const videoList = document.querySelector('.sidebar-nav');
	const video = document.querySelector('.viewer');

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
					// create li
					var videoListItems = document.createElement('li');
					// add class .video-list-item to each li
					videoListItems.classList.add('.video-list-item');
					// create a 
					var videoListItemsA = document.createElement('a');
					// set content to src
					videoListItemsA.innerHTML = `${src}`;
					// set a href to #
					videoListItemsA.href = `${src}`;
					// append a to li
					videoListItems.appendChild(videoListItemsA)
					// append items to list
					videoList.appendChild(videoListItems);
					// set video source to src
					video.src = src;
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
    	video.src = this.href;
    }

    $(document).on('click','li a', displayPlayer);
} // end document ready


