
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                   if (target.length) {
                     $('html,body').animate({
                         scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

            $(document).ready(function() {

                $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop(),
                    windowHeight = $(window).height(),
                    elementOffset = $('.marker').offset().top,
                    logoElementOffset = $('.logoMarker').offset().top,
                    distance = (elementOffset - scrollTop),
                    logoDistance = (logoElementOffset - scrollTop),
                    proportion = distance/windowHeight;                    //secondaryDistance = (secondaryOffset - scrollTop);
                    
                    //fix the navbar at the top unless you're on the starting 'splash'
                    if ($(window).width() > 680) {
                        if (distance < 50) {
                            $('#nav').addClass('navbar-fixed');
                            $('#logo').addClass('logo-fixed');
                         }
                        if (distance > 51) {
                            $('#nav').removeClass('navbar-fixed');
                            $('#logo').removeClass('logo-fixed');                    
                        }
                    }
                    //amended for mobile devices alternate navigation size
                    if ($(window).width() < 681) {
                        if (distance < 90) {
                            $('#nav').addClass('navbar-fixed');
                            $('#logo').addClass('logo-fixed');
                         }
                        if (distance > 91) {
                            $('#nav').removeClass('navbar-fixed');
                            $('#logo').removeClass('logo-fixed');                    
                        }
                    }

                    for(i = 0; i < 1; i = i + 0.1){
                        if (proportion < i) {
                            $('#logosvg').addClass('newlogo' + Math.round( (i * 10)+2 ));
                         }

                        if (proportion > i) {
                            $('#logosvg').removeClass('newlogo'+ Math.round( (i * 10)+2 ));
                        }
                  }

            });
            });

            var home = document.getElementById("home");
            var audio = document.getElementById("audio");
            var speed = 1.5;

            window.onscroll = function()
            {
             var yOffset = window.pageYOffset;
             home.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
             //audio.style.backgroundPosition = "0px "+ (yOffset / speed) + "px"; //distance + (yoffset/speed)
            }

            //$(document).ready(function() {
            //    $(window).scroll(function () {
            //        var scrollToTop = $(window).scrollTop(),
            //        eOffset         = $('.pmarker').offset().top,
            //        paradistance    = (eOffset - scrollToTop);
            //        
            //       //fix the navbar at the top unless you're on the starting 'splash'
            //       if ($(window).width() > 1) {
            //            $("#audio").css("background-position", "0px " + (paradistance / 2) + "px");
            //                });
            //
            //    });
            //});


            

            window.addEventListener('load', function() {}, false);


            var functionIsFree = 1;
            $('#reflektor').click(function(e){
                    if(e.handled !== true){
                    var functionIsFree = false;
                    if($('.drawer').is(':hidden')){
                        var div_height = $('#audio').height() + 400;

                        $('#audio').animate({
                        height: div_height}, 200); 
                        $('.drawer').toggleClass('hideB'); 

                        window.setTimeout(function(){ $('.drawer').toggleClass('active');},400);
                    }
                    else if($('.drawer').is(':visible')){
                         var div_height = $('#audio').height() - 400;
                         $('.drawer').toggleClass('active');
                         $('.drawer').toggleClass('hideB');
                        $('#audio').animate({
                            height: div_height}, 200);
                        }



                      e.preventDefault(); 
                }
                e.handled = true;
            });     

            $(".info").click((function() {
                var i = 0;
                return function() {
                  /*  if($('#audio').height() == $(window).height()){
                         $('#audio').animate({
                       height: '60%'}, 1);
                    }else{
                    $('#audio').animate({
                       height: '100%'}, 2);
                }*/


                     var div_height = $('#audio').height();
                    var vertical_div_top_position = $('#audio').offset().top;
                    var lastchild_height = $('.spotify').height();
                    var vertical_lastchild_top_position = $('.spotify').offset().top;
                    var vertical_lastchild_bottom_position = lastchild_height + vertical_lastchild_top_position;
                    var real_height = vertical_lastchild_bottom_position - vertical_div_top_position;
                    console.log("spotify:"+ real_height + " div:" + div_height);
                    console.log($(window).height());
                    word="";
                    j=100;

                    while (real_height > div_height){
                        word=j+"%";
                         $('#audio').css("height", word);
                    div_height = $('#audio').height();
                    vertical_div_top_position = $('#audio').offset().top;
                    lastchild_height = $('.spotify').height();
                    vertical_lastchild_top_position = $('.spotify').offset().top;
                    vertical_lastchild_bottom_position = lastchild_height + vertical_lastchild_top_position;
                    real_height = vertical_lastchild_bottom_position - vertical_div_top_position;
                         j=j+5;
    //overflow div
                        }




console.log($('#audio').height())






                }
            })());


       /*     window.onresize = function() {

                  var div_height = $('#audio').height();
                    var vertical_div_top_position = $('#audio').offset().top;
                    var lastchild_height = $('.spotify').height();
                    var vertical_lastchild_top_position = $('.spotify').offset().top;
                    var vertical_lastchild_bottom_position = lastchild_height + vertical_lastchild_top_position;
                    var real_height = vertical_lastchild_bottom_position - vertical_div_top_position;
                    console.log("spotify:"+ real_height + " div:" + div_height);
                    console.log($(window).height());
                    word="";
                    j=100;

                    while (real_height > div_height){
                        word=j+"%";
                         $('#audio').css("height", word);
                      div_height = $('#audio').height();
                      vertical_div_top_position = $('#audio').offset().top;
                      lastchild_height = $('.spotify').height();
                      vertical_lastchild_top_position = $('.spotify').offset().top;
                      vertical_lastchild_bottom_position = lastchild_height + vertical_lastchild_top_position;
                      real_height = vertical_lastchild_bottom_position - vertical_div_top_position;
                      j=j+5;
    //overflow div
                        }

                }

*/

             
