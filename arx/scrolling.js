
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
                    var scrollTop     = $(window).scrollTop(),
                    elementOffset     = $('.marker').offset().top,
                    distance          = (elementOffset - scrollTop);
                    //secondaryOffset   = $('.band').offset().top;
                    //secondaryDistance = (secondaryOffset - scrollTop);
                    
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
            $('#reflektor').click(function(e){
              $('.drawer').toggleClass('active');
              e.preventDefault(); 
            });     

            $(".info").click((function() {
                var i = 0;
                return function() {
                    $('.drawer').animate({
                        height: 400 }, 200);
                }
            })());
