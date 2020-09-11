import React from 'react'
import { ContentHousing } from './ContentHousing'


const contents = [
    {   
        id: 1,
        image: 'https://revistaaxxis.com.co/wp-content/uploads/2014/05/17747arquitectura_casa_morphosis_axxis_73.jpg',
        description: 'Moderna, Casa de descando',
        place: 'Santa Elena',
        price: '$ 150.000 por noche',
        score: 3,
        users: 112
    },
    {
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
        description: 'Parapente con guia',
        place: 'Chicamocha',
        price: '$ 140.000 por persona',
        score: 5,
        users: 79
    },
    {
        id: 3,
        image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
        description: 'Disney Fotos - exclusivas',
        place: 'Cali',
        price: '$ 550.000 por noche',
        score: 4,
        users: 109
    },
    {
        id: 4,
        image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
        description: 'Glamping en pareja',
        place: 'Retiro',
        price: '$ 750.000 por noche',
        score: 5,
        users: 60
    },
    {
        id: 5,
        image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
        description: 'Vacaciones en playa',
        place: 'Capuganá',
        price: '$ 1.850.000 por 5 noches 4 dias',
        score: 2,
        users: 10
    }
]

export const Housing = () => ( 
    <section className="housing">
        { 
            contents.map(content => <ContentHousing key={ content.id } id= {content.id} key={ content.id } image={content.image} description={content.description} place={content.place} price={content.price} score={content.score} users={content.users}/>) 
        }
    </section>
)