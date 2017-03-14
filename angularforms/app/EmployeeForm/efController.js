angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        if ($routeParams.id){
           
            $scope.employee = DataService.getEmployee($routeParams.id);
        }else {
            $scope.employee = { id: 0 }
        }
            

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                //add
                DataService.insertEmployee($scope.editableEmployee);
            } else {
                //update
                DataService.updateEmployee($scope.editableEmployee);
            }
            $scope.employee = angular.copy($scope.editableEmployee);
            console.log($scope.employee);
            $window.history.back();
        }

        $scope.cancelForm = function () {
            console.log("cancelled");
            $window.history.back();
        }
    });