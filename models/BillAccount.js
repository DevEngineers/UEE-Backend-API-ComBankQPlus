const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillAccountSchema = new Schema({
    accountNo:{
        type:String,
        required:true,
        default:''
    },
    name:{
        type:String,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let BillAccount = mongoose.model('BillAccount',BillAccountSchema);

module.exports = BillAccount;
