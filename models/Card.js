const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: ''
    },
    cardNumber: {
        type: String,
        required: true,
        default: ''
    },
    month: {
        type: String,
        required: true,
        default: ''
    },
    year: {
        type: String,
        required: true,
        default: ''
    },
    cvv: {
        type: String,
        required: true,
        default: ''
    }
}, {
    timestamps: true
})

let Card = mongoose.model('Card', CardSchema);

module.exports = Card;
