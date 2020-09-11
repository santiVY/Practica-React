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
        style = {}
    }
    ) => (   
        isLink 
        ? <Link className="button" style = { style } to={ linkTo }>{ label }</Link>
        :<button className="button" style = { style } type ={ type }>{ label }</button>
)