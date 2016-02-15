/**
 * Created by ajt on 2/15/2016.
 */
var app = angular.module('app',[]);

app.controller('my-controller', function($scope, $q, $http, $location){
    $scope.title = "hi";

    $scope.turnOn = function() {
        var req = {
            method: 'POST',
            url: 'http://10.0.0.16:3000/on'
        };
        $http(req);
        console.log("on");
    };

    $scope.turnOff = function() {
        var req = {
            method: 'POST',
            url: 'http://10.0.0.16:3000/off'
        };
        $http(req);
        console.log("off");
    };
});