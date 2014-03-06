$(function() {

var s = Snap("#logosvg");

//load your svg as a fragment
Snap.load("img/logo_black.svg", function (f) {
    //you can change the colour of your polygons/paths/lines/etc
    f.selectAll("polygon").attr({fill: "#bada55"});

    //and then append the fragment to the page
    g = f.select("g");       
    s.append(g);

    //now we can animate the polygons/paths/lines etc
    g.selectAll("path").forEach(function(element){
        element.animate({fill: "#f00"}, 2000);
    });

});
});
