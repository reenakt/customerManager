'use strict';

angular
.module('CustomerManagerApp')
.controller('CustomersCtrl',['$scope','CustomerService',function ($scope,CustomerService) {

    var customer = $scope.customer;

    $scope.create = function (customer) {

        var savePromise = CustomerService.createCustomer(customer);
        var successCallback = function (response) {
            console.log("success");
        }

        var failureCallback = function (err) {
            console.log("Error while saving task");
        }

        savePromise

            .success(successCallback)
            .error(failureCallback);

    }

    $scope.deleteCustomer = function (id) {

        customerService.deleteCustomer(id);
    }

}])

.controller('OrderCtrl',['$scope','CustomerService',function($scope,CustomerService){

    var customerPromise = CustomerService.getCustomers();
    var successCallback = function (response) {

        $scope.customers = response;


    }

    var failureCallback = function (err) {
        console.log("Error while fetching customers");
    }
    customerPromise

        .success(successCallback)
        .error(failureCallback);


}])

.controller('OrderChildController',function($scope){

    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;



    function init() {
        if ($scope.customer && $scope.customer.orders){
            var total = 0.00;
            for (var i=0;i<$scope.customer.orders.length;i++){
                var order = $scope.customer.order[i];

                total += order.orderTotal;
            }
        }

        $scope.setOrder = function(orderby){
            if(orderby === $scope.orderby){
                $scope.reverse = !$scope.reverse;
            }
            $scope.orderby = orderby;
        };

    }


})
    .controller('CustomerOrderCtrl',['$scope','customerId','CustomerService',function($scope,customerId,CustomerService){

        CustomerService

            .getCustomer(customerId)
            .success(function(customer){
                $scope.customer=customer;
            }).error(function(err){
            console.log("Error::occured during get operation")
        })


    }])


























