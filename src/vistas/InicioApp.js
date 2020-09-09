import React, {useContext} from 'react'

import { AuthContext } from '../contexts/AuthContext'

export const InicioApp = () => {
    const { isAuth, user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            {isAuth &&  <h1>Solo me renderizo si estoy loggeado</h1>}
        </div>
    )
}
