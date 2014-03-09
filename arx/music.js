
            var functionIsFree = 1;

            function slider(album){ 
                var allDraw = $('.drawer');
                var empty = true;
                allDraw.each(function() {
                    if($(this).is(":visible")){
                      empty = false;
                    }
                });
                if(empty){
                    var div_height = $('#audio').height() + 400;
                    $('#audio').animate({
                    height: div_height}, 200); 
                    $(album).toggleClass('hideB'); 
                    window.setTimeout(function(){ $(album).toggleClass('active');},400);
                }else if($(album).is(':visible')){
                   var div_height = $('#audio').height() - 400;
                         $(album).toggleClass('active');
                         $(album).toggleClass('hideB');
                        $('#audio').animate({
                            height: div_height}, 200);
                } else{
                  $(album).toggleClass('hideB'); 
                       
                  allDraw.not(album).each(function() {
                    if($(this).is(":visible")){
                         $(this).toggleClass('active');
                         $(this).toggleClass('hideB');
                    }
                    });
                     $(album).toggleClass('active'); 

                }
            }

          /*      
                var div_height = $('#audio').height() + 400;
                    $(album).toggleClass('hideB');    
                    $(".drawer").not(album).css( "height", "0");
                     $(".drawer").not(album).css( "display", "none"); 

                }


            }
                /*else if($('#slidereflektor').is(':visible')){
                     var div_height = $('#audio').height() - 400;
                     $('#slidereflektor').toggleClass('active');
                     $('#slidereflektor').toggleClass('hideB');
                    $('#audio').animate({
                        height: div_height}, 200);
                    }*/








            $('#reflektor').click(function(e){
                slider('#slidereflektor');
            });

            $('#thesuburbs').click(function(e){
                slider('#slidesuburbs');
            });

            $('#neonbib').click(function(e){
                slider('#slideneonbible');
            });

            $('#funeralalb').click(function(e){
                slider("#slidefuneral");
            });

          $('#ep').click(function(e){
                slider('#slideep');
            });
                  





          














        /*    $(".info").click((function() {
                var i = 0;
                return function() {
                   if($('#audio').height() == $(window).height()){
                         $('#audio').animate({
                       height: '60%'}, 1);
                    }else{
                    $('#audio').animate({
                       height: '100%'}, 2);
                }


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
*/

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