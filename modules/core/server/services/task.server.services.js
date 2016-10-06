'use strict';

var mongoose = require('mongoose'),

    Customer = mongoose.model('customer');

module.exports.saveCustomer = function(savableCustomer,callback){

    var customer = new Customer(savableCustomer);

    customer.save(function(err){
        if(err){
            callback(err);
        }
        callback(null,customer);
    })
}

module.exports.getCustomers = function(callback){

    Customer.find({},{__v:0}, function(err,customer){
        if(err) throw err;

        callback(null,customer);
    })



}

//get contact by id

module.exports.getCustomerById = function(id,customer,callback){


    Customer.findOne({'_id':id},function (err,customer) {
        if(err)
            callback(err);
        else
            callback(null,customer);
    })
}



//find contact by id

module.exports.findCustomerById = function (id,callback) {
    Customer.findOne({'_id':id},function (err,customer) {
        if(err)
            callback(err);
        else
            callback(null,customer);

    })

}
module.exports.updateCustomer = function(id,updatedCustomer,callback){


    var checkCustomer = new Customer(updatedCustomer);
    Customer.update({_id:id},updatedCustomer,function(err, customer){

        if(err)
            callback(err);
        else
            callback(null,updatedCustomer);


    })

}

module.exports.deleteCustomer = function(id,callback) {

    Customer.remove({_id:id},function(err){

        if (err) {
            callback(err);
        }else{

            callback(null);
        }

    })




}