import React from 'react'
//colocar entre corchetes el nombre igual del componente para el alias
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import { Routes } from './pages/Routes'


//con export indico que el archivo es de uso publico 
export const App = () => {
    return (
        <Router>
            <Routes />
        </Router>     
    )
}
