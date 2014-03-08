var win=$(window),
bod=$("body"),
nav=$(".nav"),
about=$("#band"),
audio=$("#audio"),
video=$("#video"),
live=$("#live");



$(document).ready(function(){$(".logo").click(function(b){b.preventDefault();bod.animate({scrollTop:0},"slow")});$("#homeTop h1, #homeTop h2, #homeTop h3").click(function(b){b.preventDefault();bod.animate({scrollTop:audio.offset().top},"slow")});$("li.inPage a").click(function(d){d.preventDefault();var c=$(this),b=c.attr("href");bod.animate({scrollTop:$(b).offset().top},"slow")});$("h1.fittext").fitText(".42",{maxFontSize:220,minFontSize:90});$("h2.fittext").fitText("1.25",{maxFontSize:78});$("h3.fittext").fitText({maxFontSize:40});win.scroll(function(){bod.css("background-position","50% "+($(this).scrollTop()/9)+"px");audio.css("background-position","50%"+(($(this).scrollTop()/9)-200)+"px");live.css("background-position","50%"+(($(this).scrollTop()/9)-400)+"px");if(win.scrollTop()>=homeAbout){bod.addClass("downloadPinned")}else{bod.removeClass("downloadPinned")}});$(".downloadBtn").click(function(){window.location='http://radkey.net/feedmybrain/'});$("#lightbox").click(function(){if(bod.hasClass("lightboxed")){bod.removeClass("lightboxed")}});$("#lightbox >").click(function(b){b.stopPropagation()});