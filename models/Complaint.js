const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
    transactionId:{
        type:Number,
        required:true,
        default:''
    },
    merchantName:{
        type:String,
        required:true,
        default:''
    },
    dateAndTime:{
        type:Date,
        required:true,
        default:''
    },
    amount:{
        type:Number,
        required:true,
        default:''
    },
    status:{
    type:String,
        required:true,
    default:''
    },
    merchantCity:{
        type:String,
        required:true,
        default:''
    },
    cardNo:{
        type:Number,
        required:true,
        default:''
    },
    message:{
        type:String,
        required:true,
        default:''
    },
    complaintType:{
        type:String,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let Complaint = mongoose.model('complaints',ComplaintSchema);

module.exports = Complaint;
