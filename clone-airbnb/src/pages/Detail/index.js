import React from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'
import { FramePage } from '../FramePage'
import {  useLocation, useParams } from 'react-router-dom'



const buttonStyle = {
    backgroundColor: '#FC642D',
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

// hook no es mas que una funcion de utilidad y casi siempre inicia con use


export const DetailPage = () => {
    
    const { id } = useParams()

    return (
        <FramePage>
            <Title label="Titulo Quemado Glamping"/>
            <CardDetail image={useQuery().get("image")} />
            <Button isLink={ true } linkTo={`/booking/${ id }`} label = "¡Reserva ahora!" style={ buttonStyle }/>
        </FramePage>
    )
}

