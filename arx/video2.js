      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1, player2, player3;
      function onYouTubeIframeAPIReady() {


        player1 = new YT.Player('vid1', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

        player2 = new YT.Player('vid2', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

        player3 = new YT.Player('vid3', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {

      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {

          done = true;
        }
      }

          var pauseButton = document.getElementById("rb");

          var pauseButton2 = document.getElementById("lb");
    pauseButton.addEventListener("click", function() {
      player1.pauseVideo();
      player2.pauseVideo();
      player3.pauseVideo();

    });

    pauseButton2.addEventListener("click", function() {
      player1.pauseVideo();
      player2.pauseVideo();
      player3.pauseVideo();

    });
    
      function stopVideo() {
        player.stopVideo();
      }