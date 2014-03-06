$(function() {

	$('#main').on('load', function(){

		$('#video1').hide();
		$('#video2').hide();
	});


	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $("#video .embeddedVideo");

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

	$('.rightButton').on('click', function() {

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

	$('.leftButton').on('click', function() {

		if ($('#video1').is(':visible')){
			hideVid('#video1', 'vid1', ' ');
			showVid('#video3', 'vid3', 'http://www.youtube.com/embed/EcKinnMXuKg?&autohide=1&showinfo=0');
		}else if ($('#video2').is(':visible')){
			hideVid('#video2', 'vid2', ' ');
			showVid('#video1', 'vid1', 'http://www.youtube.com/embed/8dqEJSTLOQM?&autohide=1&showinfo=0');
		}else if ($('#video3').is(':visible')){
			hideVid('#video3', 'vid3', ' ');
			showVid('#video2', 'vid2', 'http://www.youtube.com/embed/T4JrQpzno5Y?&autohide=1&showinfo=0');
		}
	});


	// https://developers.google.com/youtube/iframe_api_reference

/*	// global variable for the player
	var player;

	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  	player = new YT.Player('vid1', {
	    events: {

	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}

	function onPlayerReady(event) {
	  	  console.log("hi");

	  // bind events
	  var playButton = document.getElementById("lb");
	  console.log(playButton.id);
	  console.log("hi");

	  playButton.addEventListener("click", function() {
	    player.playVideo();
	  });
	  
	  var pauseButton = document.getElementById("rb");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	  });
	  
	}

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	console.log( firstScriptTag);
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

*/

	function hideVid(videoName, vidName, newSrc){
		//document.getElementById(vidName).src=newSrc;
		$(videoName).hide();
	}

	function showVid(videoName, vidName, newSrc){
		$(videoName).show();
		//document.getElementById(vidName).src=newSrc;
	}


	function getScreen( url, size )
	{
  		if(url === null){ return ""; }

  		size = (size === null) ? "big" : size;
		var vid;
		var results;

		results = url.match("[\\?&]v=([^&#]*)");

		vid = ( results === null ) ? url : results[1];

		if(size == "small"){
		return "http://img.youtube.com/vi/"+vid+"/2.jpg";
		}else {
		return "http://img.youtube.com/vi/"+vid+"/0.jpg";
		}
	}


});

