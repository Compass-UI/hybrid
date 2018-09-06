'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Coupon', function($scope, Coupon) {

  $scope.label = 'Expand/Collapse';

  $scope.expandCoupon = function(){
    alert('expandCoupon', 'Must handle SyntaxError: Unexpected token ` in JSON at position 179')
    console.log(Coupon.get({}, function(coupon){
      console.log(coupon);
    }));
  }


}]);