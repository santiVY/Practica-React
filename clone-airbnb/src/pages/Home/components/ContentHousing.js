import React from 'react'

export const ContentHousing = (props) => (
    <section className="contentHousing">
        <div className="image">
            <img src={ props.image }/>
        </div>
        <div className="content">
            <h2> { props.description }</h2>
            <h5>{ props.place }</h5>
            <p>{ props.price }</p>
            <img src="estrellas.PNG" />
        </div>
    </section>
)
