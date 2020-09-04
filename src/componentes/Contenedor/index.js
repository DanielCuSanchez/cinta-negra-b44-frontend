import React, { useEffect, useState } from 'react'

const URL = 'https://pokeapi.co/api/v2/pokemon/'


export const Contenedor = () => {
    const [datosPeticion, setDatosPeticion ] = useState({})
    console.log(datosPeticion)
    useEffect(()=>{
        setDatosPeticion({nombre: "Ali"})
    },[])
    return (
        <div>
            <h2>{ JSON.stringify(datosPeticion) }</h2>
        </div>
    )
}
