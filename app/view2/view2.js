///<reference path='../bower_components/angular/angular.js' />
'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.factory('couponData', function($http, $log){
  return {
    getCoupon: function() {
      return $http({method: 'GET', url: '../coupon.json'})
    }
  }
})

.factory('resourceFactory', ['$resource', function($reource){
  return {
    getCoupon: function(){
      return $reource('../coupon.json/:id', {id: '@id'}).get({id:1})
    }
  }

}])

// .controller('View2Ctrl', ['$scope', 'couponData', '$log', 'resourceFactory,', function($scope, couponData, $log, resourceFactory) {
.controller('View2Ctrl', ['$scope', 'couponData', '$log', function($scope, couponData, $log) {
  // $scope.data = resourceFactory.getCoupon(); // can bind directly to $resource
  couponData.getCoupon().
  success(function(data, status, headers, config){
    console.log(data);
    $scope.data = data;
    console.log(status);
    console.log(headers);
    console.log(config);
  }).
  error(function(data, status, headers, config){
    $log.warn(date, status, headers(), config)
  })

}]);