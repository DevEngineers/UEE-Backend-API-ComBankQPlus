const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
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
