

const sendBooking = (booking) => {
    console.log(`Se ha realizado su reserva con:
     id: ${booking.id} 
     nombre: ${booking.nombre}
     correo: ${booking.correo}
     fecha: ${booking.fecha}
     telefono: ${booking.telefono}`)

     let messege = 'Exitosa'

     return { transacción: messege, booking}
}

module.exports = sendBooking

