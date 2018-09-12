'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) { /** ngAnnotate will take care of minification */
config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.
  module('myApp').
  factory('Coupon', ['$resource',
    function($resource) {
        /**
         * Mock now
         */
        return {
            "Coupon #": 1,
            "Flight": "UA 1742",
            "Date":	"08/01/2018",
            "Segment": "ORD-SFO",
            "Class": "S",
            "Issued By": "UA",
            "Status": "Adjusted",
            "Detail": `/$*AQUINOACEVEDO/VERONICAMA UA      CPN 1 UA      USED UA       01623471516225
            CHICAGO OHARE UA      ORD/ORD UA      7MAY17 
            O HOUSTON BUSH INTL UA      UA 1128G UA      11MAY17 150P OK GNA0R0EF NVB UA      11MAY NVA UA      11MAY 
            `
        }


      return $resource('coupon.json', {}, {
        query: {
          method: 'GET',
          params: {couponId: 'coupons'},
          isArray: true
        }
      });
    }
  ]);

angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', ["$scope", function ($scope) {
    $scope.oneAtATime = true;
  
    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];
  
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  
    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  
    $scope.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }]);
  