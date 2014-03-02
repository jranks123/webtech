$(function() {



	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $("#videoSection .embeddedVideo");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

	$('#rightButton').on('click', function() {

		if ($('#video1').is(':visible')){
			hideVid('#video1', 'vid1', ' ');
			showVid('#video2', 'vid2', 'http://www.youtube.com/embed/T4JrQpzno5Y?controls=0&showinfo=0');
		}else if ($('#video2').is(':visible')){
			hideVid('#video2', 'vid2', ' ');
			showVid('#video3', 'vid3', 'http://www.youtube.com/embed/EcKinnMXuKg?controls=0&showinfo=0');
		}else if ($('#video3').is(':visible')){
			hideVid('#video3', 'vid3', ' ');
			showVid('#video1', 'vid1', 'http://www.youtube.com/embed/8dqEJSTLOQM?controls=0&showinfo=0');
		}
	});

	$('#leftButton').on('click', function() {

		if ($('#video1').is(':visible')){
			hideVid('#video1', 'vid1', ' ');
			showVid('#video3', 'vid3', 'http://www.youtube.com/embed/EcKinnMXuKg?controls=0&showinfo=0');
		}else if ($('#video2').is(':visible')){
			hideVid('#video2', 'vid2', ' ');
			showVid('#video1', 'vid1', 'http://www.youtube.com/embed/8dqEJSTLOQM?controls=0&showinfo=0');
		}else if ($('#video3').is(':visible')){
			hideVid('#video3', 'vid3', ' ');
			showVid('#video2', 'vid2', 'http://www.youtube.com/embed/T4JrQpzno5Y?controls=0&showinfo=0');
		}
	});



	function hideVid(videoName, vidName, newSrc){
		document.getElementById(vidName).src=newSrc;
		$(videoName).hide();
	}

	function showVid(videoName, vidName, newSrc){
		$(videoName).show();
		document.getElementById(vidName).src=newSrc;
	}



});

