hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){

    $scope.a=0;
    $scope.b=0;
    $scope.suma=0;
    $scope.diferenta=0;
    $scope.prod=0;
    $scope.imp=0;

    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        $scope.suma=MathService.add($scope.a,$scope.b);
        $scope.diferenta=MathService.substract($scope.a,$scope.b);
        $scope.prod=MathService.produs($scope.a,$scope.b);
        $scope.imp=MathService.div($scope.a,$scope.b);

//        TODO #13 refactor your calculations using MathService
    }

}]);
