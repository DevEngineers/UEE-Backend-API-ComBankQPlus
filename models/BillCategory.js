const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillCategorySchema = new Schema({
    id:{
        type:String,
        required:true,
        default:''
    },
    type:{
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

let BillCategory = mongoose.model('BillCategory',BillCategorySchema);

module.exports = BillCategory;
