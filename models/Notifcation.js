const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    name:{
        type:String,
        required:true,
        default:''
    },
    amount:{
        type:String,
        required:true,
        default:''
    },
},{
    timestamps:true
})

let Notification = mongoose.model('Notification',notificationSchema);

module.exports = Notification;
