const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    id:  {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpwd: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Users", userSchema);