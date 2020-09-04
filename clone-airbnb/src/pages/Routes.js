import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { HomePage } from './Home'
import { DetailPage } from './Detail'
import { BookingPage } from './Booking'

export const Routes =  () => (
    <Switch>
        <Route path="/" exact component={ HomePage } />
        {/* slash /:id  es para pasar parametros a la ruta con la libreria router*/}
        <Route path="/detail/:id" component={ DetailPage } />
        <Route path="/booking/:id" component={ BookingPage } />
    </Switch>
)