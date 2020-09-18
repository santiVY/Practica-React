import React from 'react'
import { Score } from '../../../components/Score'

export const CardDetail = (props) => {

    return (
        <article className="card-detail">
            <img src={props.image}/>
            <h2> { props.description }</h2>
            <h3>{ props.place }</h3>
            <Score score={props.score} users={props.users}/>
        </article>
    )
}