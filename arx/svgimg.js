        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

        var fillcolor = 'fill:blue';

        var p1 =  document.getElementById('int1');
        console.log(p1);
        p1.addEventListener("click", function() {
        console.log("click1");
                var svgElem = document.getElementById('int1');
                svgElem.setAttribute("style", fillcolor);



        });

         var p2 =  document.getElementById('int2');
        console.log(p2);
        p2.addEventListener("click", function() {
        console.log("click2");
                var svgElem = document.getElementById('int2');
                svgElem.setAttribute("style", fillcolor);



        });

         var p3 =  document.getElementById('int3');
        console.log(p3);
        p3.addEventListener("click", function() {
        console.log("click3");
                var svgElem = document.getElementById('int3');
                svgElem.setAttribute("style", fillcolor);



        });
         var p4 =  document.getElementById('int4');
        console.log(p4);
        p4.addEventListener("click", function() {
        console.log("click4");
                var svgElem = document.getElementById('int4');
                svgElem.setAttribute("style", fillcolor);



        });
         var p5 =  document.getElementById('int5');
        console.log(p5);
        p5.addEventListener("click", function() {
        console.log("click5");
                var svgElem = document.getElementById('int5');
                svgElem.setAttribute("style", fillcolor);



        });

         var p6 =  document.getElementById('int6');
        console.log(p6);
        p6.addEventListener("click", function() {
        console.log("click6");
                var svgElem = document.getElementById('int6');
                svgElem.setAttribute("style", fillcolor);



        });



        var p7 =  document.getElementById('int7');
        console.log(p7);
        p7.addEventListener("click", function() {
        console.log("click7");
                var svgElem = document.getElementById('int7');
                svgElem.setAttribute("style", fillcolor);



        });


        var p8 =  document.getElementById('int8');
        p8.addEventListener("click", function() {
                var svgElem = document.getElementById('int8');
                svgElem.setAttribute("style", fillcolor);
        });



            }, 'xml');

        });