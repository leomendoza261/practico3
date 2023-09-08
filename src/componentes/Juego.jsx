import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import Resultado from './Resultado';
import Marcador from './Marcador';

function Juego({ jugadorNombre }) {
  const [jugadorSeleccion, setJugadorSeleccion] = useState(null);
  const [pcSeleccion, setPcSeleccion] = useState(null);
  const [resultado, setResultado] = useState('');
  const [jugadorPuntos, setJugadorPuntos] = useState(0);
  const [pcPuntos, setPcPuntos] = useState(0);
  const [ronda, setRonda] = useState(0);
  const [ganador, setGanador] = useState(null);

  const opciones = ['piedra', 'papel', 'tijeras'];
  const rondasMaximas = 5;

  useEffect(() => {
    const determinarResultado = () => {
      if (jugadorSeleccion === pcSeleccion) return 'Empate';
      if (
        (jugadorSeleccion === 'piedra' && pcSeleccion === 'tijeras') ||
        (jugadorSeleccion === 'papel' && pcSeleccion === 'piedra') ||
        (jugadorSeleccion === 'tijeras' && pcSeleccion === 'papel')
      ) {
        return 'Ganaste';
      }
      return 'PC gana';
    };

    if (jugadorSeleccion !== null && pcSeleccion !== null) {
      const resultadoRonda = determinarResultado();
      setResultado(resultadoRonda);

      if (resultadoRonda === 'Ganaste') {
        setJugadorPuntos(jugadorPuntos + 1);
      } else if (resultadoRonda === 'PC gana') {
        setPcPuntos(pcPuntos + 1);
      }

      if (jugadorPuntos === 3 || pcPuntos === 3) {
        // Verificar si alguien ha ganado el juego
        if (jugadorPuntos === 3) {
          setGanador(jugadorNombre);
        } else {
          setGanador('PC');
        }
      } else {
        // Si no hay ganador y no es un empate, incrementar el número de rondas
        if (resultadoRonda !== 'Empate') {
          setRonda(ronda + 1);
        }

        // Reiniciar selecciones para la siguiente ronda
        setJugadorSeleccion(null);
        setPcSeleccion(null);
      }
    }
  }, [jugadorSeleccion, pcSeleccion, jugadorNombre, jugadorPuntos, pcPuntos, ronda]);

  const handleSeleccion = (seleccion) => {
    const pcRandom = opciones[Math.floor(Math.random() * 3)];
    setPcSeleccion(pcRandom);
    setResultado(null);
    setJugadorSeleccion(seleccion);
  };

  const reiniciarJuego = () => {
    setJugadorSeleccion(null);
    setPcSeleccion(null);
    setResultado('');
    setJugadorPuntos(0);
    setPcPuntos(0);
    setRonda(0);
    setGanador(null);
  };

  return (
    <div>
      <h2>Juego de Piedra, Papel y Tijeras</h2>
      {ganador ? (
        <div>
          <h3>¡{ganador} gana el juego!</h3>
          <button onClick={reiniciarJuego}>Reiniciar</button>
        </div>
      ) : (
        <div>
          <p>Ronda: {ronda} de {rondasMaximas}</p>
          <Resultado jugadorNombre={jugadorNombre} resultado={resultado} jugadorSeleccion={jugadorSeleccion} pcSeleccion={pcSeleccion} />
          <Selector opciones={opciones} onSeleccion={handleSeleccion} />
          <Marcador jugadorNombre={jugadorNombre} jugadorPuntos={jugadorPuntos} pcPuntos={pcPuntos} />
          <button onClick={reiniciarJuego}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default Juego;
