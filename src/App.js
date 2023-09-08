import React, { useState } from 'react';
import InputNombre from './componentes/InputNombre';
import Juego from "./componentes/Juego";
import './App.css';

function App() {
  const [jugadorNombre, setJugadorNombre] = useState('');
  const [mostrarJuego, setMostrarJuego] = useState(false);

  const handleNombreSubmit = (nombre) => {
    setJugadorNombre(nombre);
    setMostrarJuego(true);
  };

  return (
    <div className="container">
      {!mostrarJuego ? (
        <InputNombre onNombreSubmit={handleNombreSubmit} />
      ) : (
        <Juego jugadorNombre={jugadorNombre} />
      )}
    </div>
  );
}

export default App;
