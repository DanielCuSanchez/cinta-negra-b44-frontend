import React, {useContext} from 'react'

import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export const InicioApp = () => {
    const { isAuth, user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            {isAuth &&  <h1>Solo me renderizo si estoy loggeado <Link to='/tasks'>ir a mis tareas </Link> </h1>}
        </div>
    )
}
