const BookingModel = require('../model/booking_model')

const sendBooking = async (booking) => {

    try {
        
         await BookingModel(booking).save()

        console.log(`Se ha realizado su reserva con:
        id: ${booking.experience_id} 
        name: ${booking.name}
        email: ${booking.email}
        date: ${booking.booking_date}
        phone: ${booking.phone}`)
        
        let messege = 'Exitosa'
        
        return { transacción: messege, booking}

    } catch (error) {
        throw error
    }
    
}

module.exports = sendBooking

