app.controller('exampleController', function ($scope,$http) {

    debugger;
    $scope.data = {};

    var successCallBack = function(response){
        console.log("success : ",response);
        $scope.data=response.data;
    }

    var errorCallBack = function(error){
        console.log("error : ",error);
        alert('Error!!')
    }

    $http.get('https://jsonplaceholder.typicode.com/todos/1')   //third party mock api
    .then(successCallBack , errorCallBack);

})