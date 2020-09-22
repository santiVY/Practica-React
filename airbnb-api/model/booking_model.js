const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    experience_id: String,
    name: String,
    email: String,
    phone: String,
    booking_date: String
})

const BookingModel = mongoose.model('bookings', BookingSchema)

module.exports = BookingModel