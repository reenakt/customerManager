'use strict';

angular
    .module('CustomerManagerApp')
    .factory('CustomerService' , function($http){

        var  _getCustomers = function (){


            var promise = $http.get('/api/customers');

            return promise;
        }

        var _createCustomer = function(customer){
            var promise = $http.post('/api/customers',customer)
            return promise;
        }

        var _getCustomer = function (id) {

            return $http.get('/api/customers/' + id);
        }

        var _updateCustomer = function (id,customer) {
            var promise = $http.put('/api/customers/' +id ,customer)
            return promise;

        }

        var _deleteCustomer = function (id) {
            var promise = $http.delete('/api/customers/' +id)
            return promise;

        }




        return {
            getCustomers : _getCustomers,
            getCustomer :  _getCustomer,
            createCustomer: _createCustomer,
            updateCustomer: _updateCustomer,
            deleteCustomer: _deleteCustomer
        }

    })