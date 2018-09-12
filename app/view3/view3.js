'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', 'Coupon', function($scope, Coupon) {

  $scope.label = 'Expand/Collapse';

  $scope.expandCoupon = function(){
    alert('expandCoupon', 'Must handle SyntaxError: Unexpected token ` in JSON at position 179')
    console.log(Coupon.get({}, function(coupon){
      console.log(coupon);
    }));
  }


}]);