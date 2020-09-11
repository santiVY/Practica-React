import React from 'react'
import { Score } from '../../../components/Score'
import { Link } from 'react-router-dom'

export const ContentHousing = (props) => (
    <Link className="link" to={ `/detail/${props.id}?image=${props.image}` }>
        <section className="contentHousing">
            <div className="image">
                <img src={ props.image }/>
            </div>
            <div className="content">
                <h2> { props.description }</h2>
                <h5>{ props.place }</h5>
                <p>{ props.price }</p>
                <Score score={props.score} users={props.users}/>
            </div>
        </section>
    </Link>
)
