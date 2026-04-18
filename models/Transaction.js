const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    goodsID: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        enum: ['taken', 'returned'],
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    remarks: {
        type: String,
        default: '',
    },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
