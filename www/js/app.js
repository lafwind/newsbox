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

App.controller("HomeCtrl", ["$scope", "$log", "$ionicPopup", "$timeout", HomeCtrl]);
App.controller("LikeCtrl", ["$scope", "$log", "$ionicPopup", "$ionicTabsDelegate", LikeCtrl]);
App.controller("LetterCtrl", ["$scope", "$log", "$ionicPopup", "$ionicTabsDelegate", LetterCtrl]);

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

function HomeCtrl($scope, $log, $ionicPopup, $timeout) {
  $scope.refresh = function() {
    var alertPopup = $ionicPopup.alert({
      title: '说啥呢～',
      template: '别逗了～这是不会动的～'
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  }


}

function LikeCtrl($scope, $log, $ionicPopup, $ionicTabsDelegate) {
  $scope.refresh = function() {
    var alertPopup = $ionicPopup.alert({
      title: '说真的～',
      template: '这是不会动的～需求还不清楚= ='
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  }

  // Triggered on a button click, or some other target
  $scope.pwdPopup = function(index) {
    $ionicTabsDelegate.select(index);
    $scope.data = {}
    $scope.img_url = ""

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.wifi">',
      title: 'Enter Password',
      subTitle: '其实猜中了后面也没啥的……',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Enter</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              //don't allow the user to close unless he enters password
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
      var pwd = "lafxsong"
      if (res == pwd) {
        $scope.img_url = "/img/yes.png"
      } else {
        $scope.img_url = "/img/no.png"
        var alertPopup = $ionicPopup.alert({
          title: '嘿嘿嘿～',
          template: '猜不出来了吧~'
        });

      }
    });
  };
}


function LetterCtrl($scope, $log, $ionicPopup, $ionicTabsDelegate) {
  $scope.caiege = ""
  $scope.count = 0
  $scope.random


  $scope.refresh = function() {
    var alertPopup = $ionicPopup.alert({
      title: '可爱提示：',
      template: '这是不会动的～别淘气～'
    });
  }

  $scope.mention = function(index) {
    var alertPopup = $ionicPopup.alert({
      title: '这是啥？',
      template: '这个绝对不可能是彩蛋的！'
    });

    $ionicTabsDelegate.select(index);

    $scope.random = Math.round(Math.random()*1000)
    console.log($scope.random);

    if ($scope.count < 3 || $scope.random % 5 != 0 ) {
      $scope.caiege = "caiege"
      $scope.count += 1
    } else {
      $scope.caiege = ""
      $scope.count += 1
    }
    console.log($scope.count);
  }
}
