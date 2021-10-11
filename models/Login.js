const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    userId:{
        type:String,
        required:true,
        default:''
    },
    password:{
        type:Number,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let Login = mongoose.model('login',LoginSchema);

module.exports = Login;
