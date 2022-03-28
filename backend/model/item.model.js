const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema ({
    id: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    item_details: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Items", itemSchema);