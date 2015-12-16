

// Application
var app = angular.module('shuffling', []);

// localStorage.removeItem('guests');

// initialize guest list with some data at app startup
app.guests= [{  guestname: "Santa Claus",
	            transdate: "2015-12-25T06:00:00.000Z",
			     pickdrop: "pickup",
				 location: "North Pole"
             },
             {  guestname: "Rudolph the Red-nosed Reindeer",
	            transdate: "2015-12-26T06:00:00.000Z",
			     pickdrop: "dropoff"
			 },
             {  guestname: "Frosty the Snowman",
	            transdate: "2015-12-27T06:00:00.000Z",
			     pickdrop: "pickup",
				 location: "Venice Beach, CA"
			 }
			 ];



// Controller 1 of 2
app.controller('formController', ['elService','changeTab',function(elService,changeTab){
  var fc= this;

  fc.storeData= function(){

	 console.log("guest name: " + fc.guestname);
	 console.log("transition date: " + fc.transdate);
	 console.log("dropoff/pickup: " + fc.pickdrop);
	 console.log("location: " + fc.location);
	 elService.talk();
	 changeTab.execute();
	 console.log("myStorage: " + fc.myStorage);
	 console.log("localStorage.length: " + localStorage.length);
	 console.log("localStorage.keys: ");
	 for (var key in localStorage){
		 console.log("     * " + key);
		 localStorage.removeItem(key);
	 }
  };

}]);



// Controller 2 of 2
app.controller('guestController', [function(){
	var gc= this;
    

	// Initialize guest list on application startup
	if(localStorage.length === 0)
    {    localStorage.guests= JSON.stringify(app.guests);
    }

    gc.guests= JSON.parse(localStorage.guests);

	gc.mesg= "this is a variable test";

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


