import { Col, Container, Row } from 'reactstrap'
import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../contexts/AuthContext'
import { Redirect } from 'react-router-dom'
import { Tarea } from '../componentes/Tarea'
import axios from 'axios'

export const Tareas = () => {
    const [tareas, setTareas] = useState([])
    const { user } =  useContext(AuthContext)
    useEffect(()=>{
        // let globalUser = user
        // if(globalUser === null){
        //     const token = localStorage.getItem('APP_TAREAS')
        //     const fetchUser = decode(token)
        //     console.log('😀',fetchUser)
        //     globalUser = fetchUser
        // }
        if(user === null ) return
        const consulta = async ()=>{
            const URL_TAREAS = `${process.env.REACT_APP_BASE_BACKEND}/usuarios/${user._id}/tareas`
            console.log(URL_TAREAS)
            try {
                const resTareas = await axios.get(URL_TAREAS,{ headers: {Authorization: `Bearer ${localStorage.getItem('APP_TAREAS')}`} })
                console.log(resTareas.data.response)
                setTareas(resTareas.data.response)
            } catch (error) {
                console.log(error)
            }
        }
        //consulta(globalUser._id)
        consulta()
    },[user])

    return (
        <>
           { !localStorage.getItem('APP_TAREAS') && <Redirect to='/login' />}
           <h2>Tareas usuario</h2>
           {
                tareas.length === 0
                ? <p>Nada que mostrar</p>
                :<Container>
                    <Row>
                        {
                            tareas.map(tarea => <Col key={tarea._id} sm={6} md={4} className="text-center"> <Tarea {...tarea} /> </Col>)
                        }
                     </Row>
                </Container>
           }
        </>
    )
}
