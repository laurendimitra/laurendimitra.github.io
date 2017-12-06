$(document).ready(function () {

    $(".button-collapse").sideNav();


    var options = [{
        selector: '#staggered-test',
        offset: 300,
        callback: function (el) {
            Materialize.showStaggeredList($(el));
        }
    }, {
        selector: '#staggered-test2',
        offset: 300,
        callback: function (el) {
            Materialize.showStaggeredList($(el));
        }
    }];

    Materialize.scrollFire(options);


    google.maps.event.addDomListener(window, 'load', init);

    function init() {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(43.071755, -70.762553),
            styles: [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [{
                            "hue": "#311B92"
                        },
                        {
                            "saturation": 0
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                            "visibility": "simplified"
                        },
                        {
                            "lightness": 100
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }
            ]
        };
        function pinSymbol(color) {
            return {
                path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
                fillColor: color,
                fillOpacity: 1,
                strokeColor: '#fff',
                strokeWeight: 2,
                scale: 1,
           };
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.071755, -70.762553),
            map: map,
            icon: pinSymbol("#000"),
            title: 'Find Me Here!'
        });
    }


});