// Public Art at CMU App
angular.module('starter', ['ionic'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('app', {
      url: "/",
      templateUrl: "index.html"
    })
})


.controller('AppCtrl', function($scope, $ionicLoading, $ionicPlatform, $ionicModal){
 
  ///////////////// MAP ///////////////////
  function initializeMap() {
    var CMU = new google.maps.LatLng(40.44249,-79.94255);
    var mapOptions = {
      center: CMU,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    $scope.kraus_campo_location = new google.maps.LatLng(40.441661,-79.942426);
    $scope.pittsburgh_mural_location = new google.maps.LatLng(40.443452,-79.942273);
    $scope.cfa_niches_location = new google.maps.LatLng(40.441684,-79.943110);
    $scope.mannino_tiles_location = new google.maps.LatLng(40.443302,-79.942556);
    $scope.walking_sky_location = new google.maps.LatLng(40.444140,-79.942884);
    $scope.purnell_sculptures_location = new google.maps.LatLng(40.443481,-79.943273);
    $scope.cloud_window_location =  new google.maps.LatLng(40.442614, -79.943628);
    $scope.fresh_faces_location = new google.maps.LatLng(40.443601, -79.942217);
    $scope.snowman_location = new google.maps.LatLng(40.442122, -79.944152);
    $scope.two_oranges_location = new google.maps.LatLng(40.442425, -79.945938);
    $scope.mao_yisheng_location = new google.maps.LatLng(40.441756, -79.945458);
    $scope.the_fence_location = new google.maps.LatLng(40.442247, -79.943479);

    $scope.work_locations = [
      $scope.walking_sky_location,
      $scope.purnell_sculptures_location,
      $scope.fresh_faces_location,
      $scope.pittsburgh_mural_location,
      $scope.mannino_tiles_location,
      $scope.kraus_campo_location,
      $scope.cfa_niches_location,
      $scope.the_fence_location,
      $scope.cloud_window_location,
      $scope.snowman_location,
      $scope.mao_yisheng_location,
      $scope.two_oranges_location,
    ]

    $scope.work_information = [
      "Walking_To_The_Sky/Walking_To_The_Sky.json",
      "Purnell_Sculptures/Purnell_Sculptures.json",
      "Fresh_Faces/Fresh_Faces.json",
      "Pittsburgh_Mural/Pittsburgh_Mural.json",
      "Mannino_Tiles/Mannino_Tiles.json",
      "Kraus_Campo/Kraus_Campo.json",
      "CFA_Niches/CFA_Niches.json",
      "The_Fence/The_Fence.json",
      "Cloud_Window/Cloud_Window.json",
      "Snowman/Snowman.json",
      "Mao_Yisheng/Mao_Yisheng.json",
      "Two_Oranges/Two_Oranges.json",
    ]

    //////// Art Markers ////////////
    // Kraus Campo
    var kraus_campo = new google.maps.Marker({
      position: $scope.kraus_campo_location,
      map: map,
      title: 'Kraus Campo'
    });
    google.maps.event.addListener(kraus_campo, 'click', function() {
      $scope.openWorkModal("Kraus_Campo/Kraus_Campo.json")
    });
    // Pittsburgh Mural
    var pittsburgh_mural = new google.maps.Marker({
      position: $scope.pittsburgh_mural_location,
      map: map,
      title: 'Pittsburgh Mural'
    });
    google.maps.event.addListener(pittsburgh_mural, 'click', function() {
      $scope.openWorkModal("Pittsburgh_Mural/Pittsburgh_Mural.json")
    });
    // CFA Niches
    var cfa_niches = new google.maps.Marker({
      position: $scope.cfa_niches_location,
      map: map,
      title: 'CFA Niches'
    });
    google.maps.event.addListener(cfa_niches, 'click', function() {
      $scope.openWorkModal("CFA_Niches/CFA_Niches.json")
    });
    // Mannino's Tiles
    var mannino_tiles = new google.maps.Marker({
      position: $scope.mannino_tiles_location,
      map: map,
      title: "Mannino's Tiles"
    });
    google.maps.event.addListener(mannino_tiles, 'click', function() {
      $scope.openWorkModal("Mannino_Tiles/Mannino_Tiles.json")
    });
    // Walking to the Sky
    var walking_sky = new google.maps.Marker({
      position: $scope.walking_sky_location,
      map: map,
      title: "Walking to the Sky"
    });
    google.maps.event.addListener(walking_sky, 'click', function() {
      $scope.openWorkModal("Walking_To_The_Sky/Walking_To_The_Sky.json")
    });    
    // Purnell Hall Sculptures
    var purnell_sculptures = new google.maps.Marker({
      position: $scope.purnell_sculptures_location,
      map: map,
      title: "Purnell Hall Sculptures"
    });
    google.maps.event.addListener(purnell_sculptures, 'click', function() {
      $scope.openWorkModal("Purnell_Sculptures/Purnell_Sculptures.json")
    });    
    // Cloud Window
    var cloud_window = new google.maps.Marker({
      position: $scope.cloud_window_location,
      map: map,
      title: "Cloud Window"
    });
    google.maps.event.addListener(cloud_window, 'click', function() {
      $scope.openWorkModal("Cloud_Window/Cloud_Window.json")
    });    
    // Fresh Faces
    var fresh_faces = new google.maps.Marker({
      position: $scope.fresh_faces_location,
      map: map,
      title: "Fresh Faces"
    });
    google.maps.event.addListener(fresh_faces, 'click', function() {
      $scope.openWorkModal("Fresh_Faces/Fresh_Faces.json")
    });   
    // Snowman
    var snowman = new google.maps.Marker({
      position: $scope.snowman_location,
      map: map,
      title: "Snowman"
    });
    google.maps.event.addListener(snowman, 'click', function() {
      $scope.openWorkModal("Snowman/Snowman.json")
    });   
    // For the Love of Two Oranges
    var two_oranges = new google.maps.Marker({
      position: $scope.two_oranges_location,
      map: map,
      title: "For the Love of Two Oranges"
    });
    google.maps.event.addListener(two_oranges, 'click', function() {
      $scope.openWorkModal("Two_Oranges/Two_Oranges.json")
    });   
    // Mao Yisheng
    var mao_yisheng = new google.maps.Marker({
      position: $scope.mao_yisheng_location,
      map: map,
      title: "Mao Yisheng"
    });
    google.maps.event.addListener(mao_yisheng, 'click', function() {
      $scope.openWorkModal("Mao_Yisheng/Mao_Yisheng.json")
    });   
    // For the Love of Two Oranges
    var the_fence = new google.maps.Marker({
      position: $scope.the_fence_location,
      map: map,
      title: "The Fence"
    });
    google.maps.event.addListener(the_fence, 'click', function() {
      $scope.openWorkModal("The_Fence/The_Fence.json")
    });   

    $scope.map = map;
  }

  // Make and show map
  google.maps.event.addDomListener(window, 'load', initializeMap);

  
  //////////////// MODALS //////////////////
  

  ////////// Work Modal ///////////////
  $scope.openWorkModal = function(file) {
    loadJSON('../resources/'+file,
             function(data) { 
              $scope.workData = data;
              $ionicModal.fromTemplateUrl('workOfArt.html', {
                  scope: $scope,
                  animation: 'slide-in-up'
                }).then(function(modal) {
                  $scope.workModal = modal;
                  $scope.imageIndex = 0;
                  $scope.workModal.show()
                });
             },
             function(xhr) { console.error(xhr); }
    );
  };
  $scope.closeWorkModal = function() {
    $scope.workModal.remove();
  };
  function loadJSON(path, success, error)
  {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function()
      {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  if (success)
                      success(JSON.parse(xhr.responseText));
              } else {
                  if (error)
                      error(xhr);
              }
          }
      };
      xhr.open("GET", path, true);
      xhr.send();
  }
 $scope.nextImage = function() {
    var len = $scope.workData.Images.length;
    var circles = [];
    for (var i = 0; i < len; i++){
      circles.push("&#9675");
    }
    if ($scope.imageIndex < len-1){
      $scope.imageIndex++;
    }
    circles[$scope.imageIndex] = "&#9679"
    document.getElementById("workImage").src = $scope.workData.Images[$scope.imageIndex]
    document.getElementById("workImageNav").innerHTML = (circles.join()).replace(/,/g, "");
 }
 $scope.previousImage = function(){
 var len = $scope.workData.Images.length;
    var circles = [];
    for (var i = 0; i < len; i++){
      circles.push("&#9675");
    }
    if ($scope.imageIndex > 0){
      $scope.imageIndex--;
    }
    circles[$scope.imageIndex] = "&#9679"
    document.getElementById("workImage").src = $scope.workData.Images[$scope.imageIndex]
    document.getElementById("workImageNav").innerHTML = (circles.join()).replace(/,/g, "");
}

  $scope.$on('$destroy', function() {
    $scope.tourModal.remove();
    $scope.workModal.remove();
  });



//////////// WAYFINDING ///////////////////////

  $scope.centerOnCMU = function(){
    $scope.loading = $ionicLoading.show({
      showBackdrop: false
    });
    $scope.map.setCenter(new google.maps.LatLng(40.44249,-79.94255))
    $ionicLoading.hide();
  }

  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }
    $scope.loading = $ionicLoading.show({
      showBackdrop: false
    });
    if (navigator.geolocation) {
      var timeoutVal = 1000*1000*100;
      navigator.geolocation.getCurrentPosition(
        function(pos){
          // get and add directions to nearest work
          $scope.directionsToNearest(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $ionicLoading.hide();
        }, 
        function(error) {
          alert('Unable to get location: ' + error.message);
        },
        { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
      )
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  $scope.directionsToNearest = function(meLatLng) {
    service = new google.maps.DistanceMatrixService();
    $scope.meLatLng = meLatLng;
    service.getDistanceMatrix(
    {
      origins: [$scope.meLatLng],
      destinations: $scope.work_locations,
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    }, callback);

    function callback(response, status) {
      var results = response.rows[0].elements;
      var closestDistance = Number.MAX_VALUE;
      var closestIndex = 0;
      var closeBy = [];
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        if (element.distance.value < closestDistance){
          $scope.distance = element.distance.text;
          closestDistance = element.distance.value;
          closestIndex = j;
        }
      }

      var request = {
        origin: $scope.meLatLng,
        destination: $scope.work_locations[closestIndex],
        travelMode: google.maps.TravelMode.WALKING
      };

      var directionsDisplay;
      directionsDisplay = new google.maps.DirectionsRenderer({
       suppressMarkers: true
      });
      directionsDisplay.setMap($scope.map)

      var directionsService = new google.maps.DirectionsService();
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          $scope.openPreviewModal($scope.work_information[closestIndex]);
        }
      });
    }
  }

  $scope.drawTourRoutes = function() {
    $scope.centerOnMe();
    // change to match actual nearest work
    // look at directionsToNearest to fine closestIndex
    var closestIndex = 0;

    var batches = [[],[]];
    var batchStarts = [closestIndex, (closestIndex + ($scope.work_locations.length / 2) - 1) % $scope.work_locations.length]
    var batchLengths = [$scope.work_locations.length / 2, $scope.work_locations.length - $scope.work_locations.length / 2 + 1];
    for(var i=0; i < 2; i++){
      var batch_start = batchStarts[i];
      var batch_length = batchLengths[i];
      for(var j = 0; j < batch_length; j++){
        batches[i].push({ location: $scope.work_locations[(batch_start+j)%$scope.work_locations.length],
                          stopover: true});
      }
    }
    console.log(batches);
    var combinedResults;
    var unsortedResults = [{}]; // to hold the counter and the results themselves as they come back, to later sort
    var directionsResultsReturned = 0;
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay;
    directionsDisplay = new google.maps.DirectionsRenderer({
     suppressMarkers: true
    });
    directionsDisplay.setMap($scope.map)
    for (var k = 0; k < batches.length; k++) {
        var lastIndex = batches[k].length - 1;
        var start = batches[k][0].location;
        var end = batches[k][lastIndex].location;
         
        // trim first and last entry from array
        var waypts = [];
        waypts = batches[k];
        waypts.splice(0, 1);
        waypts.splice(waypts.length - 1, 1);
         
        var request = {
            origin : start,
            destination : end,
            waypoints : waypts,
            travelMode : window.google.maps.TravelMode.WALKING
        };
        (function (kk) {
            directionsService.route(request, function (result, status) {
                if (status == window.google.maps.DirectionsStatus.OK) {
                     
                    var unsortedResult = {
                        order : kk,
                        result : result
                    };
                    unsortedResults.push(unsortedResult);
                     
                    directionsResultsReturned++;
                     
                    if (directionsResultsReturned == batches.length) // we've received all the results. put to map
                    {
                        // sort the returned values into their correct order
                        unsortedResults.sort(function (a, b) {
                            return parseFloat(a.order) - parseFloat(b.order);
                        });
                        var count = 0;
                        for (var key in unsortedResults) {
                            if (unsortedResults[key].result != null) {
                                if (unsortedResults.hasOwnProperty(key)) {
                                    if (count == 0) // first results. new up the combinedResults object
                                        combinedResults = unsortedResults[key].result;
                                    else {
                                        // only building up legs, overview_path, and bounds in my consolidated object. This is not a complete
                                        // directionResults object, but enough to draw a path on the map, which is all I need
                                        combinedResults.routes[0].legs = combinedResults.routes[0].legs.concat(unsortedResults[key].result.routes[0].legs);
                                        combinedResults.routes[0].overview_path = combinedResults.routes[0].overview_path.concat(unsortedResults[key].result.routes[0].overview_path);
                                         
                                        combinedResults.routes[0].bounds = combinedResults.routes[0].bounds.extend(unsortedResults[key].result.routes[0].bounds.getNorthEast());
                                        combinedResults.routes[0].bounds = combinedResults.routes[0].bounds.extend(unsortedResults[key].result.routes[0].bounds.getSouthWest());
                                    }
                                    count++;
                                }
                            }
                        }
                        directionsDisplay.setDirections(combinedResults);
                    }
                }
            });
        })(k);
    }
  }
  $scope.openPreviewModal = function(file) {
    loadJSON('../resources/'+file,
             function(data) { 
              $scope.workData = data;
              $ionicModal.fromTemplateUrl('previewInfo.html', {
                  scope: $scope,
                  animation: 'slide-in-up'
                }).then(function(modal) {
                  $scope.previewModal = modal;
                  $scope.previewModal.show()
                });
             },
             function(xhr) { console.error(xhr); }
    );
  };
  $scope.closePreviewModal = function() {
    $scope.previewModal.remove();
  };



})
