import './index.css'

import React from 'react';

export const Hola = ( { nombre } ) => {

    return(
        <div>
            <h1 className="titulo">Hola { nombre }</h1>
        </div>
    )
}


//export default Hola