var app = angular.module('myApp', []);

debugger;
//component1
app.directive("customtag1", function() {
    return {
      restrict: "E",
    //   templateUrl:"template.html",  this or below u can use
      template:`<h2>Helooooo!!!!</h2>`
    };
  })

//component2 
  app.directive("customtag2",function(){
    return{
      restrict:'E',
      template:`<h6>haule haule</h6>`
    }
  })