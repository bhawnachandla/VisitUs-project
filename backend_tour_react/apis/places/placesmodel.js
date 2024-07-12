const mongoose = require('mongoose')

var PlacesSchema = mongoose.Schema({
    place_name: { type: String, default: '' },
    destinationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'destinationCategory',
        default: null
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city',
        default: null
    },
    place_image: { type: String, default: 'places/default.jpg' },
    place_description: { type: String },
    Place_status: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now() }
})
module.exports = mongoose.model('places', PlacesSchema)