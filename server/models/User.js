const mongoose = require('mongoose');

// user schema
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// collection inside of the db
const User = module.exports = mongoose.model('users', UserSchema);