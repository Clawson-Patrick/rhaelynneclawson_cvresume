/* ==============================================
MAP -->
=============================================== */

var locations = [
    ['<div class="infobox"><h3 class="title"><a href="about.html">MY USA OFFICE</a></h3><span>NEW YORK CITY 4102 / 52</span><br><span>+71 325 988 32 81</span></div>', 33.715829, -112.290179, 383]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    styles: [{
        "stylers": [{ "hue": "#ffffff" }, { saturation: -100 },
            { gamma: 2 }
        ]
    }],
    center: new google.maps.LatLng(33.6400854,-112.2467165),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
    // marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //     map: map,
    // });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}