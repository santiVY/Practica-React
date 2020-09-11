import React from 'react'
import { Title } from './../../components/Title'
import { Ranking } from './components/Ranking'
import { Housing } from './components/Housing'
import { FramePage } from '../FramePage'

//return implicito con () si fuera con {} debo colocar return

export const HomePage = () => (
    <FramePage>
        <Title label = 'Discover Airbnb Top 5'/>
        <Ranking />
        <Title label = 'Global housing'/>
        <Housing />
    </FramePage>
)
