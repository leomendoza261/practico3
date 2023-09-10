import React, { useEffect, useState } from 'react';

function Resultado({ resultado, jugadorSeleccion, pcSeleccion, jugadorNombre }) {
  /* Estados para almacenar las imágenes del jugador y la PC */
  const [imagenJugador, setImagenJugador] = useState(null);
  const [imagenPC, setImagenPC] = useState(null);

  useEffect(() => {
    /* Cargar las imágenes del jugador y la PC cuando cambian las selecciones */
    if (jugadorSeleccion) {
      import(`../images/${jugadorSeleccion}.png`).then((imagen) => {
        setImagenJugador(imagen.default);
      });
    }
    if (pcSeleccion) {
      import(`../images/${pcSeleccion}.png`).then((imagen) => {
        setImagenPC(imagen.default);
      });
    }
  }, [jugadorSeleccion, pcSeleccion]);

  return (
    <div className="selecciones">
      {/* Muestra una imagen predeterminada en caso de que no haya una seleccion */}
      {resultado === 'shine' && <img src={require('../images/shine.png')} alt="shine" />}
      {/* Si el resultado no es "shine", muestra las selecciones del jugador y la PC */}
      {resultado !== 'shine' && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', marginRight: '20px' }}>
            <p>{jugadorNombre}</p>
            {/* Muestra la imagen del jugador */}
            {imagenJugador && <img src={imagenJugador} alt={jugadorSeleccion} />}
          </div>
          <div style={{ display: 'inline-block' }}>
            <p>PC</p>
            {/* Muestra la imagen de la PC */}
            {imagenPC && <img src={imagenPC} alt={pcSeleccion} />}
          </div>
          <h4>Resultado: {resultado}</h4>
        </div>
      )}
    </div>
  );
}

export default Resultado;
