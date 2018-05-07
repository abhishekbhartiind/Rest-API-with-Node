const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    type: String,
    name: {
        type: String
    },
    email:{
        type:String,
        minlength:1,
        trim:true,
        lowercase: true
    },
    mobile:{
        type:Number 
    },
    address:String,
    createdOn:Date,
    createdBy:String,
    updatedBy:String,
    updatedOn:String,
    status:{
        type:String,
        enum:["active","inactive"],
        required:true,
        default: "active"
    }
})

var Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer