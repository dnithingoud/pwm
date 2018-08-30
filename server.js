var app =angular
        .module("myApp",[])
        .controller("validateCtrl",function($scope,$http){
            $http({
                method:'post',
                url:'https://pwm-server.herokuapp.com/api/user/login'
            })
        .then(function (response){
            $scope
        });    
        });



        var app = angular.module('myApp', []);
        app.controller('validateCtrl', function($scope) {
            $scope.user = 'emailid';
            $scope.password = 'john.doe@gmail.com';
        });

        $scope.getRequest = function () {
            console.log("I've been pressed!");  
            $http.get("")
                .then(function successCallback(response){
                    $scope.response = response;
                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };

$scope.postRequest = function(){
    $http.post("https://pwm-server.herokuapp.com/api/user/login",data)
        .then(function SuccessfullyCallback(response){
            console.log("successfully post-ed data");
        },function errorCallback(response){
            console.log("POST-ing of data faild")
        });

}