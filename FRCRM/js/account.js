﻿app.controller('accountsctrl', function ($scope, $http, localStorageService,$location) {
    localStorageService.set('accountid', 0);
    $scope.openAccount = function (id,name) {
        localStorageService.set('account_name', name);
        localStorageService.set('accountid', id);
        $location.path('/home-liste')
    }
    var city_id = localStorageService.get('city_id')
    $http.post('Default.aspx/GetAccountJson', '{"city_id":"' + city_id + '"}').success(function (data) {
        var jsn = data.d;
        jsn = JSON.parse(jsn);
        $scope.accounts = jsn;
       
    }).error();

});

