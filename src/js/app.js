var app = angular.module('shuffling', []);

app.controller('LogEverything', ['elService',function(elService){
  var le= this;


  le.writeConsole= function(str){
     console.log("str:" + str);
	 console.log("guest name: " + le.guestname);
	 console.log("transition date: " + le.transdate);
	 console.log("pickup: " + le.pickup);
	 console.log("dropoff: " + le.dropoff);
	 console.log("location: " + le.location);
	 elService.talk();
  };



}]);


app.service('elService', [function(){
    this.talk= function(){
	   console.log("elService() at your service...");
	};	   

}]);


app.controller('TabController', [function(){


}]);
