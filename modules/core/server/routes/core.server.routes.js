'use strict';

module.exports = function(app){
    var controller = require('../controllers/core.server.controller'),
        mainController=require('../controllers/main.server.controller');



// view task and create new task

    app
        .route('/')
        .get(mainController.index);

    app

        .route('/api/customers')
        .get(controller.getCustomers)
        .post(controller.createCustomers)

    app
        .route('/api/customers/:customerId')
        .put(controller.updateCustomer)
        .delete(controller.deleteCustomer)
        .get(controller.getCustomerById)


    app.param('customerId',controller.validateCustomerIdAndForward);



}