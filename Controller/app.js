var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function ($scope) {

    $scope.name = 'Ross Geller';
    $scope.age = 28;
    $scope.weight = 75;
}])