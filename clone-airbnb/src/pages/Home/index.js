import React from 'react'
import { Topbar } from './components/Topbar'
import { Title } from './components/Title'
import { Ranking } from './components/Ranking'
import { Housing } from './components/Housing'

//return implicito con () si fuera con {} debo colocar return

export const HomePage = () => (
    <section className="page">
        <Topbar />
        <Title label = 'Discover Airbnb'/>
        <Ranking />
        <Title label = 'Global housing'/>
        <Housing />
    </section>
)
