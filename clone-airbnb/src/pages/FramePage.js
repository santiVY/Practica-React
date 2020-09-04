import React, { Fragment } from 'react'
import { Topbar } from './../components/Topbar'

//Fragmentos: permiten encapsular todo y queda como invisible
// children es un dato por defecto que llega por las propiedades

export const FramePage = ({ children }) => (
    <Fragment>
        <Topbar />
        <section className="page">
            { children }
        </section>
    </Fragment>
)
