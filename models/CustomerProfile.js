const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerProfileSchema = new Schema({
    userId:{
        type:String,
        required:true,
        default:''
    },
    address:{
        type:String,
        required:true,
        default:''
    },
    email:{
        type:String,
        required:true,
        default:''
    },
    phone:{
        type:Number,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let CustomerProfile = mongoose.model('customerProfile',CustomerProfileSchema);

module.exports = CustomerProfile;
