const  sendBooking  = require('../bussinesLogic/bookingBL')

const booking = (req, res) => {
   const booking = {
       experience_id,
       name,
       email,
       booking_date,
       phone
     } = req.body
     res.status(201).json(sendBooking(booking))
}


module.exports = booking