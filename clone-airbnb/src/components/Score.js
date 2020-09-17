import React from 'react'

const StartFill = () => (
     <i className="material-icons">star</i>
)

const StarOutLine = () => (
     <i className="material-icons">star_outline</i>
)

export const Score = ({ score = 0, users = 0 }) => (
    <section className="score">
        <div>
            {
                [1,2,3,4,5].map((el, key) => el <= score ? <StartFill key={key} /> : <StarOutLine key = {key}/>)
            }
        </div>
        <div>
            <p>{ users }</p>
        </div>
    </section>
   
)