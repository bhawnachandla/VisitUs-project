const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    contact: { type: Number, default: '' },
    password: { type: String, default: '' },
    address: { type: String, default: '' },
    id_proof: { type: String, default: 'user/noimage.jpg' },
    city: { type: String, default: '' },
    user_status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    user_type: { type: Number }
})
module.exports = mongoose.model('user', userSchema)