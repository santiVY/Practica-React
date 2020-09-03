import React from 'react'
import { Card } from './Card'

const posts = [
    {
        image: 'https://revistaaxxis.com.co/wp-content/uploads/2014/05/17747arquitectura_casa_morphosis_axxis_73.jpg',
        description: 'Casa de descando',
        place: 'Santa Elena'
    },
    {
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
        description: 'Parapente',
        place: 'Chicamocha'
    },
    {
        image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
        description: 'Disney Fotos',
        place: 'Cali'
    },
    {
        image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
        description: 'Glamping',
        place: 'Retiro'
    },
    {
        image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
        description: 'Vacaciones en playa',
        place: 'Capuganá'
    }
]

export const Ranking = () => ( 
    <section className="ranking">
        { 
            posts.map(post => <Card image={post.image} description={post.description} place ={post.place} />) 
        }
    </section>
)