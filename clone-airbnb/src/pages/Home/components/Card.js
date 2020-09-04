import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => (
    <Link className="link" to={ `/detail/${props.id}?image=${props.image}` }>
        <article style={{ backgroundImage: `url(${props.image})`}}>
            <h2> { props.description }</h2>
            <h6>{ props.place }</h6>
        </article>
    </Link>
)
