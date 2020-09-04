import './App.css';

import { Hola } from './componentes/Hola/'
import React from 'react';

const nombres = ['Daniel','Hector','Miriam','Alice']

function App() {
  return (
    <div className="App">
      {
        nombres.map(nombre => <Hola nombre={nombre}/>)
      }
    </div>
  );
}

export default App;
