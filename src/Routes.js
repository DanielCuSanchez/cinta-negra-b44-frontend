import { Contacto } from './vistas/Contacto'
import { Inicio } from './vistas/Inicio'
import { Login } from './vistas/Login'
import React from 'react'
import { Route } from 'react-router-dom'
import { Signup } from './vistas/Signup'

export const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Inicio} />
            <Route exact path='/login' component={Login}  />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/contact' component={Contacto} />
        </>
    )
}
