var app = angular.module('shuffling', []);

app.controller('collectData', ['elService','changeTab',function(elService,changeTab){
  var cd= this;

  cd.myStorage= localStorage;
  cd.myStorage.setItem('myname','ellery');

  cd.writeConsole= function(str){
     console.log("str:" + str);
	 console.log("guest name: " + cd.guestname);
	 console.log("transition date: " + cd.transdate);
	 console.log("pickup: " + cd.pickup);
	 console.log("dropoff: " + cd.dropoff);
	 console.log("location: " + cd.location);
	 elService.talk();
	 changeTab.execute();
	 console.log("myStorage: " + cd.myStorage);
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
	};
	
}]);



app.controller('TabController', [function(){


}]);
