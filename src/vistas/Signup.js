import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import React, { useState } from 'react'

export const Signup = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usuarioCreado, setUsuarioCreado] = useState(false) //bandera si el usuario creado

    const handleSubmit = async (e)=>{
        e.preventDefault()
        //Validaciones
        const jsonUsuarioNuevo = {nombre, email, password }
        const URL_CREAR_USUARIO = `${process.env.REACT_APP_BASE_BACKEND}/auth/signup`
        try {
            const respuesta = await fetch(URL_CREAR_USUARIO,{method:'POST',headers:{ 'Content-Type': 'application/json'},  body: JSON.stringify(jsonUsuarioNuevo)} )
            const resParseada = await respuesta.json()
            if(!resParseada) return
            console.log(resParseada)
            setUsuarioCreado(true)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            {
                usuarioCreado
                ?  <h4>Usuario creado exitosamente ir al login <Link to='/login'>IR AHORA</Link> </h4>
                : <>
                    <h1>Registrate en nuestra app de tareas</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for='inputName'>Nombre</Label>
                            <Input type='text' placeholder='Ingresa tu nombre' value={nombre} onChange={(e)=>{setNombre(e.target.value)}} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='inputName'>Email</Label>
                            <Input type='text' placeholder='Ingresa tu email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='inputName'>Password</Label>
                            <Input type='text' placeholder='Ingresa una password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        </FormGroup>
                        <Button> Registrarse </Button>
                    </Form>
                </>
            }
        </div>
    )
}
