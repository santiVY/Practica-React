import React from 'react'


export const CardDetail = ({image }) => (
    <article className="card-detail">
        <img src={ image } />
        <p>
           Excelente lugar para disfrutar en familias
        </p>
    </article>
)