///<reference path='../bower_components/angular/angular.js' />
'use strict';

angular.module('myApp.view2', [
  'ngRoute', 
  'ngResource',
  'ui.bootstrap.demo'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.factory('couponData', function($http, $log){
  console.log('couponData');
  return {
    getCoupon: function() {
      return $http({method: 'GET', url: '../coupon.json'})
    }
  }
})

.factory('resourceFactory', ['$resource', function($reource){
  // let url = '../coupon.json';
  // let url = 'https://restcountries.eu/rest/v2/name/afghanistan';
  let url = 'https://restcountries.eu/rest/v2/name/';
  console.log('resourceFactory');
  // return {
    // getCoupon: function(){
      // return $reource('../coupon.json/:id', {id: '@id'}).get({id:1})
      // return $reource(`${url}:id`, {id: '@id'}).get({id:'afghanistan', isArray: true})
      return $reource(`${url}:id`, {id: '@id'}, {
        query: {
          method: 'GET',
          params: {id: 'afghanistan'},
          isArray: true
        }
      })
    // }
  // }

}])

.controller('View2Ctrl', ['$scope', 'couponData', '$log', 'resourceFactory', function($scope, couponData, $log, resourceFactory) {
  // $scope.countries = resourceFactory.getCoupon(); // can bind directly to $resource
  $scope.countries = resourceFactory.query(); // can bind directly to $resource
  console.log($scope.countries); // will it work? Yes, looks synchronous but will wait for $resource ( i.e. resourceFactory to return)
  alert($scope.countries);// will not work
  resourceFactory.getCoupon().$promise.then(function(data){
    alert(data);
    $scope.countries = data
  })
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