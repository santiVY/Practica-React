import React, { useState, useEffect } from 'react'
import { FramePage } from '../FramePage'
import { Button } from '../../components/Button'
import { useParams } from 'react-router-dom'
import { requestHttp } from '../../config/HttpRequest'
import swal from 'sweetalert';

export const BookingPage = () => {

    // estamos utilizando dos hooks, useParams y useState
    const { id } = useParams()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)

    //metodo para cancelar la recarga del formulario 
    //cuando presiono el submit en el boton
    const bookingHandler = (event) => {
        event.preventDefault()
        requestBooking()
        makeBooking()
    }

    const requestBooking  = () => {
        const body = {
            experience_id: id, // id: id (Esto es lo mismo)
            name: name, 
            email: email,
            phone: phone,
            booking_date: date
        }
       return body
    }

    const makeBooking = async () => {
        const bodyJson = requestBooking();
        console.log(bodyJson)
        try {
             const response = await requestHttp('post', '/booking', bodyJson)
             console.log('response', response)
             swal(`Buen trabajo ${name}`, `Se creo la reserva exitosamente`, "success");
        } catch (error) {
            console.error(error)
        }
    }

    //useEffect ejecuta la fucniona si escucha alguna de las variables
    useEffect(() => {
        // let formValid = false
        // if(name !== '' 
        // && phone !== ''
        // && email !== ''
        // && date !== ''){
        //     formValid = true
        // }
        // setIsValidForm(formValid)
        setIsValidForm(name !== '' && phone !== '' && email !== '' && date !== '')
    }, [name, phone, email, date])

    return (
    <FramePage>
        <form onSubmit={bookingHandler} className="booking-form">
            <div>
                {/* con el onchange capturo la informacion de input} */}
                <label>Nombre: </label>
                <input value= { name } onChange={ e => setName(e.target.value) } type="text" />
            </div>
            <div>
                <label>Teléfono: </label>
                <input value= { phone } onChange={ e => setPhone(e.target.value) } type="tel" />
            </div>
            <div>
                <label>Correo: </label>
                <input value= { email } onChange={ e => setEmail(e.target.value) } type="email" />
            </div>
            <div>
                <label>Fecha de reserva: </label>
                <input value= { date } onChange={ e => setDate(e.target.value) } type="date" />
            </div>
            <Button disabled={ !isValidForm } label="Reservar ahora" type="submit"/> 
        </form>
    </FramePage>
    )
}