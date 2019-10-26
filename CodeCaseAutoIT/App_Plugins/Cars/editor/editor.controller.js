angular.module("umbraco").controller("cars.grideditorcontroller", function ($scope, $http, dialogService ) {

    $scope.car = $scope.control.value;

    $scope.openDialogClick = openDialog;

    if ($scope.car === null) {
        openDialog();
    }


    function openDialog() {

            dialogService.open({
                template: '/App_Plugins/Cars/editor/dialogview.html',
                callback: function (data) {
                    console.log("data back", data);
                    $scope.car = data;
                    $scope.control.value = data;
                },
                show: true
            });
    }


});


angular.module("umbraco").controller("cars.GetOriginsDialogcontroller", function ($scope, $http, dialogService) {
    $scope.origins = null;
    $scope.selectedItem = null;
    $scope.cars = null;
    $scope.selectedCar = null;
    $scope.search = "";

    $http({
        method: 'GET',
        url: '/umbraco/Api/CarsApi/GetOrigins'
    }).then(function successCallback(response) {
        console.log(response.data);
        $scope.origins = response.data;
    },
    function errorCallback(response) {
        console.log(response);
    });

    $scope.onSelectCar = function (car) {
        $scope.selectedCar = car;
    };

    $scope.getAllCarsByOrigin = function () {

        $http({
            method: 'GET',
            url: '/umbraco/Api/CarsApi/GetAllCarsByOrigin?origin=' + $scope.selectedItem
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.cars = response.data;


        },
            function errorCallback(response) {
                console.log(response);
            });
    };


});

