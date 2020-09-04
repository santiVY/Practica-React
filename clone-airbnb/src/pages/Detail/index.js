import React from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'
import { FramePage } from '../FramePage'
import {  useLocation } from 'react-router-dom'


const buttonStyle = {
    backgroundColor: '#FC642D',
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export const DetailPage = () => (
    <FramePage>
        <Title label="Titulo Quemado Glamping"/>
        <CardDetail image={useQuery().get("image")} />
        <Button label = "¡Reserva ahora!" style={ buttonStyle }/>
    </FramePage>
)

