app.controller('StudentController', function ($scope) {

    //Controllers helps to get data onto our view
    //AngularJS controllers controls the flow of data in an application
    //Controller is a place where we define data and functions that makeup the behavior of our Angular application

    //Filters are used to format the expressions
    //Filters are generally added to the expressions by using the pipe (|) character.


    debugger;
    //whatever you want to do will go here
    $scope.firstname = 'Chandler';
    $scope.lastname = 'Bing';
    $scope.age = 28;
    $scope.isSpy = true;
    $scope.codename = "chandy";


    $scope.getFullName = function () {
        return $scope.firstname + " " + $scope.lastname;
    }
})