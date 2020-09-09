import { Contacto } from './vistas/Contacto'
import { InicioApp } from './vistas/InicioApp'
import { Login } from './vistas/Login'
import React from 'react'
import { Route } from 'react-router-dom'
import { Signup } from './vistas/Signup'

export const Routes = () => {
    return (
        <>
            <Route exact path='/' component={InicioApp} />
            <Route exact path='/login' component={Login}  />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/contact' component={Contacto} />
        </>
    )
}
