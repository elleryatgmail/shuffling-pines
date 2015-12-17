

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
app.controller('formController', ['elService','changeTab','writeService',function(elService,changeTab,writeService){
  var fc= this;

  fc.addGuest= function(){
	 var formData= { guestname: fc.guestname,
		             transdate: fc.transdate,
					  pickdrop: fc.pickdrop,
					  location: fc.location
                   };
	 writeService.addGuest(formData);
	 changeTab.execute();
  };



}]);



// Controller 2 of 2
app.controller('guestController', ['readService',function(readService){
	var gc= this;
    gc.guests= readService.read();

	gc.mesg= "this is a variable test";

}]);





	
// Service 1 of 4
app.service('elService', [function(){
    this.talk= function(){
	   console.log("elService() at your service...");
	};

}]);



// Service 2 of 4
app.service('changeTab', [function(){
	this.execute= function(){
       var target = $(".nav-tabs li.active");
	   var sibling = target.next();
	   if(sibling.is("li")){
		   sibling.children("a").tab("show");
	   }
	};

}]);


// Service 3 of 4
app.service('readService', [function(){
	var readSvc= this;

	readSvc.read= function(){
	   // Initialize guest list on application startup
	   if(localStorage.length === 0)
       {    localStorage.guests= JSON.stringify(app.guests);
       }

	   readSvc.guests= JSON.parse(localStorage.guests);
	   return readSvc.guests;
	};

}]);


	
// Service 4 of 4
app.service('writeService', [function(){
    var writeSvc= this;

	writeSvc.addGuest= function(formData){

	   writeSvc.guests= JSON.parse(localStorage.guests);
       writeSvc.guests.push(formData);
       localStorage.guests= JSON.stringify(writeSvc.guests);
	};


}]);



