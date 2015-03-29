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
    // Pittsburgh Mural
    var pittsburgh_mural = new google.maps.Marker({
      position: new google.maps.LatLng(40.443452,-79.942273),
      map: map,
      title: 'Pittsburgh Mural'
    });
    google.maps.event.addListener(pittsburgh_mural, 'click', function() {
      $scope.openWorkModal("Pittsburgh_Mural/Pittsburgh_Mural.json")
    });
    // CFA Niches
    var cfa_niches = new google.maps.Marker({
      position: new google.maps.LatLng(40.441684,-79.943110),
      map: map,
      title: 'CFA Niches'
    });
    google.maps.event.addListener(cfa_niches, 'click', function() {
      $scope.openWorkModal("CFA_Niches/CFA_Niches.json")
    });
    // Mannino's Tiles
    var mannino_tiles = new google.maps.Marker({
      position: new google.maps.LatLng(40.443302,-79.942556),
      map: map,
      title: "Mannino's Tiles"
    });
    google.maps.event.addListener(mannino_tiles, 'click', function() {
      $scope.openWorkModal("Mannino_Tiles/Mannino_Tiles.json")
    });
    // Walking to the Sky
    var walking_sky = new google.maps.Marker({
      position: new google.maps.LatLng(40.444140,-79.942884),
      map: map,
      title: "Walking to the Sky"
    });
    google.maps.event.addListener(walking_sky, 'click', function() {
      $scope.openWorkModal("Walking_To_The_Sky/Walking_To_The_Sky.json")
    });    
    // Purnell Hall Sculptures
    var purnell_sculptures = new google.maps.Marker({
      position: new google.maps.LatLng(40.443481,-79.943273),
      map: map,
      title: "Purnell Hall Sculptures"
    });
    google.maps.event.addListener(purnell_sculptures, 'click', function() {
      $scope.openWorkModal("Purnell_Sculptures/Purnell_Sculptures.json")
    });    
    // Cloud Window
    var cloud_window = new google.maps.Marker({
      position: new google.maps.LatLng(40.442614, -79.943628),
      map: map,
      title: "Cloud Window"
    });
    google.maps.event.addListener(cloud_window, 'click', function() {
      $scope.openWorkModal("Cloud_Window/Cloud_Window.json")
    });    
    // Fresh Faces
    var fresh_faces = new google.maps.Marker({
      position: new google.maps.LatLng(40.443601, -79.942217),
      map: map,
      title: "Fresh Faces"
    });
    google.maps.event.addListener(fresh_faces, 'click', function() {
      $scope.openWorkModal("Fresh_Faces/Fresh_Faces.json")
    });   
    // Snowman
    var snowman = new google.maps.Marker({
      position: new google.maps.LatLng(40.442122, -79.944152),
      map: map,
      title: "Snowman"
    });
    google.maps.event.addListener(snowman, 'click', function() {
      $scope.openWorkModal("Snowman/Snowman.json")
    });   
    // For the Love of Two Oranges
    var two_oranges = new google.maps.Marker({
      position: new google.maps.LatLng(40.442425, -79.945938),
      map: map,
      title: "For the Love of Two Oranges"
    });
    google.maps.event.addListener(two_oranges, 'click', function() {
      $scope.openWorkModal("Two_Oranges/Two_Oranges.json")
    });   
    // Mao Yisheng
    var mao_yisheng = new google.maps.Marker({
      position: new google.maps.LatLng(40.441756, -79.945458),
      map: map,
      title: "Mao Yisheng"
    });
    google.maps.event.addListener(mao_yisheng, 'click', function() {
      $scope.openWorkModal("Mao_Yisheng/Mao_Yisheng.json")
    });   
    // For the Love of Two Oranges
    var the_fence = new google.maps.Marker({
      position: new google.maps.LatLng(40.442247, -79.943479),
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
