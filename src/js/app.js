

// Application
var app = angular.module('shuffling', []);



// Controller 1 of 2
app.controller('formController', ['elService','changeTab',function(elService,changeTab){
  var fc= this;

  fc.myStorage= localStorage;
  fc.myStorage.setItem('myname','ellery');

  fc.writeConsole= function(str){
     console.log("str:" + str);
	 console.log("guest name: " + fc.guestname);
	 console.log("transition date: " + fc.transdate);
	 console.log("pickup: " + fc.pickup);
	 console.log("dropoff: " + fc.dropoff);
	 console.log("location: " + fc.location);
	 elService.talk();
	 changeTab.execute();
	 console.log("myStorage: " + fc.myStorage);
  };

}]);




// Service 1 of 2
app.service('elService', [function(){
    this.talk= function(){
	   console.log("elService() at your service...");
	};	   

}]);




// Service 2 of 2
app.service('changeTab', [function(){
	this.execute= function(){
       var target = $(".nav-tabs li.active");
	   var sibling = target.next();
	   if(sibling.is("li")){
		   sibling.children("a").tab("show");
	   }
	};
	
}]);





// Controller 2 of 2
app.controller('guestController', [function(){





}]);
