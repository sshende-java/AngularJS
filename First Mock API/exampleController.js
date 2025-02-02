app.controller('exampleController', function ($scope,$http) {

    debugger;
    $scope.data = {};

    $http.get('https://jsonplaceholder.typicode.com/todos/1')   //third party mock api
    .then(function(response){
        console.log(response);
        $scope.data=response.data;

    },function(error){
        console.log(error);
    })

})