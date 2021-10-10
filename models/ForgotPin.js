const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForgotPinSchema = new Schema({
    otp:{
        type:Number,
        required:true,
        default:''
    },
    pin:{
        type:Number,
        required:true,
        default:''
    },
    confirmPin:{
        type:Number,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let ForgotPin = mongoose.model('ForgotPin',ForgotPinSchema);

module.exports = ForgotPin;
