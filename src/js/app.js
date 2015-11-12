var app = angular.module('shuffling', []);

app.controller('LogEverything', ['$scope',function($scope){
  var le= this;

  le.writeConsole= function(obj){
     console.log(obj);
  };
}]);

app.controller('TabController', [function(){


}]);
