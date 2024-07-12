const mongoose = require('mongoose')

var destinationSchema = mongoose.Schema({
    destination_name: { type: String },
    destination_image: { type: String, default: 'destination_category/noimage.jpg' },
    status: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now() }
})
module.exports = mongoose.model('destinationCategory', destinationSchema)