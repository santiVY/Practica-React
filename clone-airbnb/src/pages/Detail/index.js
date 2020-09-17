import React, { useState, useEffect } from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'
import { FramePage } from '../FramePage'
import { useParams } from 'react-router-dom'
import { requestHttp } from '../../config/HttpRequest'


const buttonStyle = {
    backgroundColor: '#FC642D',
}

// hook no es mas que una funcion de utilidad y casi siempre inicia con use
export const DetailPage = () => {
    
    const { id } = useParams()

    const [experiencie, setExperiencie] = useState({}) 
    
    useEffect (()=>{
        getDetailExperiencies()
    }, [])

    const getDetailExperiencies = async () => {
        try {
            const response = await requestHttp('get', `/experiences/detail/${ id }`)
            setExperiencie(response.experiencie)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <FramePage>
            <Title label = {experiencie.title}/> 
            <CardDetail image = {experiencie.image} description = {experiencie.description} place = {experiencie.place} score = {experiencie.score} users = {experiencie.users}/>
            <Button isLink={ true } linkTo={`/booking/${ id }`} label = "¡Reserva ahora!" style={ buttonStyle }/>
        </FramePage>
    )
}

