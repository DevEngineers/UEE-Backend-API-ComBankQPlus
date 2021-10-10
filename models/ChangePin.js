const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChangePinSchema = new Schema({
    oldPin:{
        type:Number,
        required:true,
        default:''
    },
    newPin:{
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

let ChangePin = mongoose.model('changePin',ChangePinSchema);

module.exports = ChangePin;
