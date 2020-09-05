import React, { useEffect, useState } from 'react'

const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const Contenedor = () => {
    const [datosPeticion, setDatosPeticion ] = useState({})
    const [datosAPI, setDatosAPI] = useState([])

    useEffect(()=>{
        fetch(URL)
            .then(response => response.json())
            .then(JsonDATA => setDatosAPI(JsonDATA.results))
    },[])
    // const consulta = async()=>{
    //     const response = await fetch(URL)
    //     const dataJSON = await response.json()
    //     setDatosAPI(dataJSON.results)
    // }
    useEffect(()=>{
        setTimeout(() => { setDatosPeticion({nombre: "Ali"})},3000)
    },[])
    return (
        <div>
            <h2>{ JSON.stringify(datosPeticion) }</h2>
            <div>{ datosAPI.map(e => <div key={e.name}>{e.name}</div> ) }</div>
        </div>
    )
}
