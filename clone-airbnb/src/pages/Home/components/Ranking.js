import React, { useEffect } from 'react'
import { Card } from './Card'

const posts = [
    {
        id: 1,
        image: 'https://revistaaxxis.com.co/wp-content/uploads/2014/05/17747arquitectura_casa_morphosis_axxis_73.jpg',
        description: 'Casa de descando',
        place: 'Santa Elena'
    },
    {
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
        description: 'Parapente',
        place: 'Chicamocha'
    },
    {
        id: 3,
        image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
        description: 'Disney Fotos',
        place: 'Cali'
    },
    {
        id: 4,
        image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
        description: 'Glamping',
        place: 'Retiro'
    },
    {
        id: 5,
        image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
        description: 'Vacaciones en playa',
        place: 'Capuganá'
    }
]

export const Ranking = () => {
    
    //component did mount
    useEffect (()=>{
        // http request
    }, [])

    return ( 
        <section className="ranking">
            {/* {   
                //sprint operator {... el } toma todas la propiedades el arreglo que estoy recorriendo
                posts.map(post => <Card key={ post.id } { ...post } />) 
            } */}
            { 
            //El key es para corregir el error de java para los operadores map o each con el indice si tiene id colocar el id si no colocar el indice que nos entrega la funcion (map, indice)
                posts.map(post => <Card key={ post.id } id= {post.id} image={post.image} description={post.description} place ={post.place} />) 
            }

        </section>
    )
}