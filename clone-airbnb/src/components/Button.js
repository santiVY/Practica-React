import React from 'react'
import { Link } from 'react-router-dom'

// Otra forma de pasar parametros es entre corchetes {} 
//de esta manera podemos indicarle un valor por defecto si 
// por algun motivo no llega el atributo desde el archivo que 
//implemente el componente
export const Button = (
    { 
        isLink = false, 
        label = 'Botón', 
        type = 'button',
        linkTo = '/', 
        style = {},
        disabled = false
    }
    ) => (   
        isLink 
        ? <Link to={ linkTo }>
            <button className="button" style = { style } type ="button" disabled = { disabled }>{ label }</button>
        </Link>
        : <button className="button" style = { style } type ={ type } disabled = { disabled } >{ label }</button>
)