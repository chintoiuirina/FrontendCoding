hrApp.controller('EmployeeListController', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list

        $http.get("http://hrapp-zth.rhcloud.com/hrapp/jobs")
            .success(function(data, status, headers, config) {
                $scope.employees = data;
            })
            .error (function(data, status, headers, config){
            alert("Error: " + status);
        });



        //TODO #HR3 Load employee list from server using commonResourcesFactory



        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);