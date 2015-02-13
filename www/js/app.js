// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var App = angular.module('LafApp', ['ionic'])

// App.controller('RootCtrl', function($scope) {
//   $scope.onControllerChanged = function(oldController, oldIndex, newController, newIndex) {
//     console.log('Controller changed', oldController, oldIndex, newController, newIndex);
//     console.log(arguments);
//   };
// })

// App.controller('HomeCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {
//
//   $scope.onRefresh = function() {
//     console.log('ON REFRESH');
//
//     $timeout(function() {
//       $scope.$broadcast('scroll.refreshComplete');
//     }, 1000);
//   }
//
// })

App.controller("HomeCtrl", ["$scope", "$log", HomeCtrl]);
App.controller("LikeCtrl", ["$scope", "$log", LikeCtrl]);
App.controller("LetterCtrl", ["$scope", "$log", LetterCtrl]);

App.run(function($ionicPlatform) {
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

function HomeCtrl($scope, $log) {
  $scope.refresh = function() {
    alert("别逗了～不会动的～小箫歌～");
  }
}

function LikeCtrl($scope, $log) {
  $scope.refresh = function() {
    alert("别逗了～不会动的～小箫歌～");
  }
}

function LetterCtrl($scope, $log) {
  $scope.refresh = function() {
    alert("别逗了～不会动的～小箫歌～");
  }

  $scope.mention = function() {
    alert("有彩蛋！");
  }
}
