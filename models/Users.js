const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "Please enter an email"],
        unique: [true, "You already have an account with that email address"]
    },
    password: {
        type: String,
        require: [true, "Please enter a password"]
    },
    username: {
        type: String,
        require: [true, "Please enter a username"],
        unique: [true, "That username already exists"]
    }
}, {
    timestamps: true
})

const User = mongoose.model('user', userShema)

module.exports = User;