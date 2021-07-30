const mongoose = require('mongoose');

// user schema
const OrderSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
    created: {
        type: Number,
        required: true
    },
    clientSecret: {
        type: String,
        required: true
    }

})

// collection inside of the db
const Order = module.exports = mongoose.model('orders', OrderSchema);