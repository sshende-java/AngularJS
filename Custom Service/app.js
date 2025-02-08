var app = angular.module('myApp', []);
app.controller('myController', function ($scope, stringService) {  //Injecting service in controller
    $scope.transformString = function (input) {
        debugger;

        $scope.output = stringService.processString(input);
    }
})