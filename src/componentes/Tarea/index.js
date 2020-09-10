import { CardTarea, Titulo } from './index.styled'

import React from 'react'

export const Tarea = ( props ) => {
    const {
        _id,
        titulo = 'Titulo default',
        autor = 'autor default',
        contenido = 'Esse cupidatat cupidatat magna eiusmod voluptate veniam cillum.'
    } = props
    return (
       <>
            <CardTarea>
                <Titulo>{ titulo} <small>{_id}</small> </Titulo>
                <h4>{ autor }</h4>
                <p> {contenido}</p>
            </CardTarea>
       </>
    )
}
