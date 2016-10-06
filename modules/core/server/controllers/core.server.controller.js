'use strict';

var customerService = require('../services/task.server.services');

module.exports.getCustomers = function(req,res){

    customerService.getCustomers(function(err,customers){
        if(err){

            res
                .status(400)
                .send({message: "could not get the customers"})
        }else{
            res.status(200)
            res.json(customers);
        }
    });

}


module.exports.createCustomers = function(req,res){

    var customer = req.body;

    customerService.saveCustomer(customer, function(err,customer){
        if(err){

            res
                .status(400)
                .send({message:"Error : internal error while saving data"})
        }else{
            res
                .status(200)
                .json(customer);
        }
    })
}

module.exports.validateCustomerIdAndForward= function(req,res,next,id){
    var metadata = req.metadata= {};

    metadata.customerId = id;

    customerService.findCustomerById(id,function (err,foundCustomer) {

       if(err){
           res
               .status(400)
               .send({message:"Error : internal error while validating id"})

           return;
       }

        else if(foundCustomer){
             metadata.model = foundCustomer;
           next();

       }



    });


}

module.exports.updateCustomer = function(req,res) {
    var updatedCustomer = req.body,
        id = req.metadata.customerId;

    customerService.updateCustomer(id,updatedCustomer,function (err,customer) {

        if (err) {
            res.status(400)
                .send({message: "unable to update Customer.please try again"})
        } else {
            res
                .status(200)
                .json(customer);
        }

    });
}

//to delete contact

module.exports.deleteCustomer = function(req,res) {

    var id= req.metadata.customerId;

    customerService.deleteCustomer(id,function(err) {


        if (err) {
            res.status(400)
                .send({message: "unable to delete Customer "})
        } else {
            res.status(200)
                .json("Success");
        }
    });
}
// get contact by id

module.exports.getCustomerById = function(req,res){

    var customer= req.body,
        id = req.metadata.customerId;

    customerService.getCustomerById(id,customer,function(err,customer){

        if(err){
            res.status(400)
                .send({message:"unable to get customers"})
        }else{
            res.status(200)
                .json(customer);
        }


    })


}