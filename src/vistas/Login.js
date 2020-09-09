import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import React, { useContext, useState } from 'react'

import { AuthContext } from '../contexts/AuthContext'
import {Redirect} from 'react-router-dom'

export const Login = () => {
    //useState
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [token, setToken] = useState('')
    //context
    const { loginUser } = useContext(AuthContext)


    console.log('ESTO ES EL EMAIL: '+ email)
    console.log('ESTO ES EL PASSWORD: '+ password)
    const handleForm = async (e) => {
        e.preventDefault()
        //Validar los datos
        //Alphanum, detalles
        const schemaCredentials = {email, password}
        const URL_LOGIN = `${process.env.REACT_APP_BASE_BACKEND}/auth/login`
        console.log({schemaCredentials,URL_LOGIN})
        //axios.post() === fetch(URL,{method: POST, body: JSON.stringify(dataENVIAR)})
        try {
            const respuesta = await fetch(URL_LOGIN,{method:'POST', headers:{ 'Content-Type': 'application/json'}, mode: 'cors' , body: JSON.stringify(schemaCredentials) })
            const res = await respuesta.json()
            setToken(res.response)
            loginUser(res.response)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Login Tareas</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} name="email" id="exampleEmail" placeholder="Ingresa tu email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" value={password}  onChange={(e)=>{ setPasword(e.target.value)}} name="password" id="examplePassword" placeholder="Ingresa tu password" />
                </FormGroup>
                <Button>Iniciar sesión</Button>
            </Form>
            {
                token && <Redirect to='/' />
            }
        </>
    )
}
