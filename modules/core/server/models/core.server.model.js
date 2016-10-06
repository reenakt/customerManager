
'use strict';

var mongoose  = require ('mongoose'),
    Schema = mongoose.Schema;



var validateFieldStrategy = function (property) {
    return property.length;
}


var CustomerSchema = new Schema({

    firstName:{
        type:String,
        default:'',
        trim:true,
        validate:[validateFieldStrategy,'Can not be empty']
    },
    lastName:{
        type:String,
        default:'',
        trim:true,
        validate:[validateFieldStrategy,'Can not be empty']
    },
    city: {
        type: String,
        trim: true,
        default: '',
        uppercase: true,
        validate: [validateFieldStrategy, 'City can not be empty']
    },

    orders:{
        product:{
            type:String

        },
        price:{
            type:Number
        },
        quantity:{
            type:Number
        },
        orderTotal:{
            type:Number
        }

}


})

mongoose.model('customer', CustomerSchema);