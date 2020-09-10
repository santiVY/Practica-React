const  sendBooking  = require('../bussinesLogic/bookingBL')

const booking = (req, res) => {
   const booking = {
       id,
       nombre,
       correo,
       fecha,
       telefono
     } = req.body
     res.status(201).json(sendBooking(booking))
}


module.exports = booking