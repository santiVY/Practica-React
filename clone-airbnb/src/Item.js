import React from 'react'

//un componente puede recibir propiedades
export const Item = (props) => (
    <li>
        { props.label }
    </li>
)