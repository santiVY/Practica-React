import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../config/HttpRequest'
import { ContentHousing } from './ContentHousing'

export const Housing = () => {
    
    const [housing, setHousing] = useState([]) 

    useEffect (()=>{
        getAllHousing()
    }, [])

    const getAllHousing = async () => {
        try {
            const response = await requestHttp('get', '/experiences')
            setHousing(response.experiencies)
        } catch (error) {
            console.error(error)
        }
    }

    return ( 
        <section className="housing">
           { 
                housing.map(el => <ContentHousing key = {el.id} {...el} />)
            }
        </section>
    )
}