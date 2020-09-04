import './App.css';

import {Contenedor} from './componentes/Contenedor/'
import { Hola } from './componentes/Hola/'
import React from 'react';

const nombres = ['Daniel','Hector','Miriam','Alice']

function App() {
  return (
    <div className="App">
      {/* {
        nombres.map(nombre => <Hola nombre={nombre}/>)
      } */}
      <Contenedor/>
    </div>
  );
}

export default App;
