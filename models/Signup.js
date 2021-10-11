const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    userId:{
        type:String,
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
    email:{
        type:String,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let Signup = mongoose.model('signup',SignupSchema);

module.exports = Signup;
