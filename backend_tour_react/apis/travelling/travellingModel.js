const mongoose = require('mongoose')
const TravellingSchema = mongoose.Schema({
    from_city: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city'
    }],
    to_destination: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'places'
    }],
    travelling_distance: { type: String, default: '' },
    mode_of_travel: [{
            mode_name: { type: String, default: '' },
            price_per_person: { type: Number, default: '' }
        }],
    travelling_status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
})
module.exports = mongoose.model('travelling', TravellingSchema)