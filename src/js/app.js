var app = angular.module('shuffling', []);

app.controller('LogEverything', ['elService','changeTab',function(elService,changeTab){
  var le= this;


  le.writeConsole= function(str){
     console.log("str:" + str);
	 console.log("guest name: " + le.guestname);
	 console.log("transition date: " + le.transdate);
	 console.log("pickup: " + le.pickup);
	 console.log("dropoff: " + le.dropoff);
	 console.log("location: " + le.location);
	 elService.talk();
	 changeTab.execute();
  };



}]);


app.service('elService', [function(){
    this.talk= function(){
	   console.log("elService() at your service...");
	};	   

}]);


app.service('changeTab', [function(){
	this.execute= function(){
       var target = $(".nav-tabs li.active");
	   var sibling = target.next();
	   if(sibling.is("li")){
		   sibling.children("a").tab("show");
	   }
	   console.log(target);
	};
	
}]);



app.controller('TabController', [function(){


}]);
