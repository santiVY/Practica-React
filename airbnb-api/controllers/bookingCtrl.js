const  sendBooking  = require('../bussinesLogic/bookingBL')

const booking = async (req, res) => {
   const booking = {
       experience_id,
       name,
       email,
       booking_date,
       phone
     } = req.body
    res.status(201).json( await sendBooking(booking))
}


module.exports = booking