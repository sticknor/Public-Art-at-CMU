angular.module('starter.controllers', [])

// .controller('SplashCtrl', function($scope) {
// 	console.log("running splash ctrl")
// })

.controller('DashCtrl', function($scope) {
	console.log("running dash ctrl")
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
