angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope,$http) {
	$http({
		url:'test.json',	
	}).then(function success (str){
		console.log(str.data)
		$scope.list=str.data
	})
	
	
	$scope.tap=function(){
		$scope.a=false;

	}
	$scope.tap1=function(){
		$scope.a=true;
	}

    $scope.tap5 = function(){
        console.log(this.item)
        $scope.lis=this.item;
        console.log(this);
    }
})


.controller('ChatsCtrl', function($scope, Chats,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $http({
		url:'ttj.json',	
	}).then(function success (str){
		console.log(str.data)
		$scope.list=str.data
	})
	
	$scope.tap=function(){
		$scope.a=false;
		
	}
	$scope.tap1=function(){
		$scope.a=true;	
	}

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$http,$stateParams) {
  $scope.settings = {
    enableFriends: true,

  }
});
