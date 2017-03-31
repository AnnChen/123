// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	$ionicConfigProvider.platform.ios.tabs.style('standard');
$ionicConfigProvider.platform.ios.tabs.position('bottom');
$ionicConfigProvider.platform.android.tabs.style('standard');
$ionicConfigProvider.platform.android.tabs.position('bottom');

$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
$ionicConfigProvider.platform.android.navBar.alignTitle('center');
$ionicConfigProvider.platform.ios.views.transition('ios');
$ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'

  })

  // Each tab has its own nav history stack:

  .state('tab.tm', {
    url: '/tm',
    views: {
      'tab-tm': {
        templateUrl: 'templates/tm.html',
        controller: 'DashCtrl'
      }
    }
  })
	
  .state('tab.ttj', {
      url: '/ttj',
      views: {
        'tab-ttj': {
          templateUrl: 'templates/ttj.html',
          controller: 'ChatsCtrl'
        }
      }
    })


  
  .state('tab.gwc', {
    url: '/gwc',
    views: {
      'tab-gwc': {
        templateUrl: 'templates/gwc.html',
       /* controller: 'Ctrl'*/
      }
    }
  })
  
  .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/my.html',
        /*controller: 'ctrl0'*/
      }
    }
  })
      .state('tab.pt', {
          url: '/tm/:id',
          views: {
              'tab-tm': {
                  templateUrl: 'templates/pt.html',
                  controller: 'ctrl2'
              }
          }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/tm');

})
.controller('ctrl',function($scope){

    $scope.tap=function(){
        $scope.a=false;

    }
    $scope.tap1=function(){
        $scope.a=true;
    }


    $scope.tap3=function(){
        var uname = document.getElementById("username").value;
        var upassword = document.getElementById("password").value;
        var _show = document.getElementById("show");
        //console.log(uname,upassword);
        var http;
        if(window.XMLHttpRequest){
            http = new XMLHttpRequest();
        }else{
            http = new ActiveXObject("Microsoft.XMLHTTP");
        }

        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                var _json = JSON.parse(http.responseText);
                console.log(http.responseText);
                if(_json.login){
                    // 登录成功
                    window.location.href = "index.html";

                } else {
                    _show.textContent = "账号或者密码有误，请重新登录";
                }

            }
        }

        http.open("POST","login.php","true");
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send("username=" + uname + "&password="+ upassword)
    }
})
    .controller('ctrl2',function($scope,$http,$stateParams){
        $http({
            url:'test.json'
        }).success(function(data){
            console.log(data.lis[$stateParams.id-8]);
            $scope.lis=data.lis[$stateParams.id-8];
            console.log($scope.lis.name)
        })
    })