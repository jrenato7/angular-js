// .module: referes to ng-app tag. That can contains: controllers, directives, filters and routes
// .controller referes to ng-controller tag


var bitcoinCalculator = angular.module('bitcoinCalculator', ['nvd3ChartDirectives']);
bitcoinCalculator.controller('bitcoinController', function($scope, $http){
  // calling the api, grabbing the value for USD, appending it to the dom
  $http.get("https://bitpay.com/api/rates")
  .success(function(data){
    $scope.rates = data;
    for(var i=0;i<data.length;i++){
      if (data[i].code == "USD"){
        $scope.currRate = data[i].rate;
      }
    }
    $scope.initialAmt = 5000;
    $scope.newAmt = function(price){
        return price/$scope.currRate * $scope.initialAmt;
    };
    $scope.profit = function(price){
        return price/$scope.currRate * $scope.initialAmt - $scope.initialAmt;
    };
    });
    $scope.xAxisTickFormatFunction = function(){
        return function(date){
            return d3.time.format('%x')(new Date(date));
        };
    };

    $scope.bitcoinHistoricalData = [{
        "key": "Prices",
        "values": values
    }];

});





//References:
/*
$http.get:
https://docs.angularjs.org/api/ng/service/$http

update the app whitout refresh the page
https://docs.angularjs.org/guide/databinding

Define a scope to app:
https://docs.angularjs.org/guide/module
https://docs.angularjs.org/api/ng/directive/ngController
https://docs.angularjs.org/guide/di

Format values before display to the user
https://docs.angularjs.org/guide/filter
https://docs.angularjs.org/api/ng/filter

Bind input, select, textarea to a property on the scope using NgModelController
https://docs.angularjs.org/api/ng/directive/ngModel

About scopes:
https://github.com/angular/angular.js/wiki/Understanding-Scopes

Make chats with D3
http://angularjs-nvd3-directives.github.io/angularjs-nvd3-directives/
*/
