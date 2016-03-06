/**
 * Created by ajt on 2/15/2016.
 */
var app = angular.module('app',[]);

app.controller('my-controller', function($scope, $q, $http, $location, $timeout){
    $scope.timers = [];
    $scope.time = {
        hour : 12,
        min  : 30,
        ampm : "Am",
        stat : ""
    };

    $scope.convertToUnix = function convertToUnix() {
        var str = $scope.time.hour.toString() + ':' + $scope.time.min.toString() + ' ' + $scope.time.ampm.toString();
        var t = new moment(str, 'HH:mm A');
        //if the timer is for the next day...
        if (t.unix() < moment().unix())
            t = t.add(1,'d');

        return t.unix();
    };

    $scope.alarm = function alarm(h,m,ap,stat) {
        this.hour = h;
        this.min = m;
        this.ampm = ap;
        this.stat = stat;
    };

    //Todo use the $location or something instead of local ip...
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

    $scope.addOnTime = function addOnTime() {
        var temp = {};
        $scope.time.stat = "on";
        temp = new $scope.alarm($scope.time.hour,$scope.time.min,$scope.time.ampm,$scope.time.stat);
        $scope.timers.push(temp);
        $scope.setAlarmTimeOut($scope.convertToUnix(),temp);
    };

    $scope.addOffTime = function addOffTime() {
        var temp = {};
        $scope.time.stat = "off";
        temp = new $scope.alarm($scope.time.hour,$scope.time.min,$scope.time.ampm,$scope.time.stat);
        $scope.timers.push(temp);
        $scope.setAlarmTimeOut($scope.convertToUnix(),temp);
    };

    $scope.setAlarmTimeOut = function(alarmTime,time) {
        var now = new moment(),
            timeRemain = alarmTime - now.unix();
        console.log(now.unix(), alarmTime, timeRemain);
        $timeout(function callWhenDone() {
            if (time.stat == 'on')
                $scope.turnOn();
            else
                $scope.turnOff();
            //remove the thing from the list now that its over!
            $scope.timers.splice(time);
        }, timeRemain*1000)
    };

    $scope.getTimes=function getTimes(n,min){
        var foo = new Array(0);
        if (min) {
            for (var i = 1; i <= n; i++) {
                if (i < 10)
                    foo.push('0'+i);
                else
                    foo.push(i);
            }
        }
        else {
            for (i = 1; i <= n; i++) {
                foo.push(i);
            }
        }
        return foo;
    };

});