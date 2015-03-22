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

    //////// Art Markers ////////////
    // Kraus Campo
    var kraus_campo = new google.maps.Marker({
      position: new google.maps.LatLng(40.441661,-79.942426),
      map: map,
      title: 'Kraus Campo'
    });
    google.maps.event.addListener(kraus_campo, 'click', function() {
      $scope.openWorkModal("Kraus_Campo/Kraus_Campo.json")
    });
    $scope.map = map;
  }
  // Make and show map
  google.maps.event.addDomListener(window, 'load', initializeMap);

  
  //////////////// MODALS //////////////////
  
  ///// Tour Modal /////////
  $ionicModal.fromTemplateUrl('planTour.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.tourModal = modal
    }) 
  $scope.openTourModal = function() {
    $scope.tourModal.show()
  };
  $scope.closeTourModal = function() {
    $scope.tourModal.hide();
  };


  ////////// Work Modal ///////////////
  $scope.openWorkModal = function(file) {
    console.log("called from where")
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
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
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
})
