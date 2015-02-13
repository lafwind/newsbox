// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var App = angular.module('starter', ['ionic'])

App.controller("AppCtrl", ["$scope", "$log", AppCtrl]);

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

function AppCtrl($scope, $log) {
  $scope.refresh = function() {
    alert("别逗～小箫歌～");
  }

  $scope.home = function() {
    alert("还逗~大哥~真没啥~");
  }

  $scope.like = function() {
    alert("虽然你这么逗~但我还是喜欢你！");
  }

  $scope.setting = function() {
    alert("真的别逗了哦小淘气～嘿嘿~");
  }
}
