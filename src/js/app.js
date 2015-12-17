
// Application
var app = angular.module('shuffling', []);



// sample guest list for initialization purposes
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
app.controller('formController', ['elService','changeTab','writeService','readService',function(elService,changeTab,writeService,readService){
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
app.controller('guestController', ['readService','writeService',function(readService,writeService){
	var gc= this;
    gc.guests= readService.read();

    gc.removeGuest= function(index){
	  writeService.removeGuest(index);
      gc.guests= readService.read();
    };

	gc.mesg= " ";

}]);








	
// Service 1 of 4 - just a template
app.service('elService', [function(){
    this.talk= function(){
	   console.log("elService() at your service...");
	};

}]);




// Service 2 of 4 - flips between bootstrap tabs
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
	   console.log("Updated LocalStorage: " + JSON.stringify(localStorage.guests));
	};


	writeSvc.removeGuest= function(index){
	   writeSvc.guests= JSON.parse(localStorage.guests);
	   writeSvc.guests.splice(index,1);
       localStorage.guests= JSON.stringify(writeSvc.guests);
	};

}]);




