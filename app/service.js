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
