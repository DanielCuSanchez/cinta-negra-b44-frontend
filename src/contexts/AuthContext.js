import React, { createContext, useEffect, useState } from 'react'

import decode from 'jwt-decode'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)

    const loginUser = (token) =>{
        localStorage.setItem('APP_TAREAS',token)
        const decoded = decode(token)
        setUser(decoded)
        setIsAuth(true)
    }
    const logoutUser = ()=>{
        localStorage.removeItem('APP_TAREAS')
        setUser({})
        setIsAuth(false)
    }
    useEffect(()=>{
        const token = localStorage.getItem('APP_TAREAS')
        if(token){
            const decoded = decode(token)
            setUser(decoded)
            setIsAuth(true)
        }
    },[])

    return(
        <AuthContext.Provider value={ {isAuth, user, loginUser, logoutUser} }>
            { props.children }
        </AuthContext.Provider>
    )
}

