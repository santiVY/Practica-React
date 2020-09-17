import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../config/HttpRequest'
import { Card } from './Card'


export const Ranking = () => {
    
    const [top5, setTop5] = useState([])

    useEffect (()=>{
        getTop5()    
    }, [])

    const getTop5 = async () => {
        try {
            const response = await requestHttp('get', '/experiences/top5')
            setTop5(response.top5)
        } catch (error) {
            console.error(error)
        }
    }

    return ( 
        <section className="ranking">
            {/* {   
                //sprint operator {... el } toma todas la propiedades el arreglo que estoy recorriendo
                posts.map(post => <Card key={ post.id } { ...post } />) 
            } */}
            { 
            //El key es para corregir el error de java para los operadores map o each con el indice si tiene id colocar el id si no colocar el indice que nos entrega la funcion (map, indice)
            top5.map(post => <Card key={ post.id } id= {post.id} image={post.image} title={post.title} place ={post.place} />) 
            }

        </section>
    )
}