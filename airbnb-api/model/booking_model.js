const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    _id: String,
    nombre: String,
    correo: String,
    fecha: String,
    telefono: String
})

const BookingModel = mongoose.model('booking', BookingSchema)

module.exports = BookingModel