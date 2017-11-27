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
    //   var options = [{
    //     selector: '#staggered-test2',
    //     offset: 300,
    //     callback: function(el) {
    //       Materialize.showStaggeredList($(el));
    //     }
    //   }];

    Materialize.scrollFire(options);

    function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }



});