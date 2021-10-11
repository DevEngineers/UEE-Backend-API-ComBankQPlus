const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    fromAccount: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Card'
    },
    title: {
        type: String,
        required: true,
        default: ''
    },
    accountNumber: {
        type: String,
        required: true,
        default: ''
    },
    accountHolderName: {
        type: String,
        required: true,
        default: ''
    },
    amount: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    reference: {
        type: String,
        required: true,
        default: ''
    },
    Date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})

let Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
