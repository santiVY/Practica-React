import React from 'react'

// Otra forma de pasar parametros es entre corchetes {} 
//de esta manera podemos indicarle un valor por defecto si 
// por algun motivo no llega el atributo desde el archivo que 
//implemente el componente
export const Button = ({ label = 'Botón', type = 'button', style = {}}) => (
    <button className="button" style = { style } type ={ type }>
        { label }
    </button>
)