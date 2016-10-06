'use strict';

angular

    .module('CustomerManagerApp')
    .config(function($stateProvider) {

        $stateProvider


            .state('customers' ,{

                url:'/customers',
                templateUrl:'modules/core/client/views/customers.client.tpl.html'


            })
            .state('customerorders' ,{

                url:'/customer/orders/:customerId',
                templateUrl:'modules/core/client/views/customerorders.client.tpl.html',

                resolve:{
                    customerId:  function($stateParams){
                        return $stateParams.customerId;
                    }
                },

                controller: 'CustomerOrderCtrl'

            })


            .state('orders', {
                url: '/orders',
                templateUrl: 'modules/core/client/views/orders.client.tpl.html'


            })








    });