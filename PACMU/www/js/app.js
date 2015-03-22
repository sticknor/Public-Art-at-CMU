// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  function initialize() {
    console.log("hjkh")
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('mapCanvas'),
            mapOptions);
  }
  $ionicPlatform.ready(function() {
    console.log("running app")
      initialize();
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
  console.log("running AppCtrl")
  $ionicModal.fromTemplateUrl('planTour.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.tourModal = modal
    }) 

  $ionicModal.fromTemplateUrl('workOfArt.html', {
      scope: $scope,
      animation: 'slide-in-left'
    }).then(function(modal) {
      $scope.workModal = modal
    }) 

  $scope.openTourModal = function() {
    $scope.tourModal.show()
  }

  $scope.closeTourModal = function() {
    $scope.tourModal.hide();
  };

  $scope.openWorkModal = function() {
    $scope.workModal.show()
  }

  $scope.closeWorkModal = function() {
    $scope.workModal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.tourModal.remove();
    $scope.workModal.remove();
  });

  function initialize() {
    var myLatlng = new google.maps.LatLng(40.44249,-79.94255);
        
    var mapOptions = {
      center: myLatlng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Carnegie Mellon University'
    });

    google.maps.event.addListener(marker, 'click', function() {
      console.log("CLICKED")
    });

    $scope.map = map;
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);
      
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
