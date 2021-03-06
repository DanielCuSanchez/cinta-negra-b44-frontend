import './App.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
import { Navbar } from './componentes/Navbar'
//import {Contenedor} from './componentes/Contenedor/'
//import { Hola } from './componentes/Hola/'
//import { Counter } from './componentes/Counter/'
import React from 'react';
import { Routes } from './Routes'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Navbar/>
          <Switch>
            <Routes/>
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
