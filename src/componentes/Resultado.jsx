import React, { useEffect, useState } from 'react';

function Resultado({ resultado, jugadorSeleccion, pcSeleccion, jugadorNombre }) {
  const [imagenJugador, setImagenJugador] = useState(null);
  const [imagenPC, setImagenPC] = useState(null);

  useEffect(() => {
    // Cargar las imágenes del jugador y la PC cuando cambian las selecciones
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
      {resultado === 'shine' && <img src={require('../images/shine.png')} alt="shine" />}
      {resultado !== 'shine' && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', marginRight: '20px' }}>
            <p>{jugadorNombre}</p>
            {imagenJugador && <img src={imagenJugador} alt={jugadorSeleccion} />}
          </div>
          <div style={{ display: 'inline-block' }}>
            <p>PC</p>
            {imagenPC && <img src={imagenPC} alt={pcSeleccion} />}
          </div>
          <h4>Resultado: {resultado}</h4>
        </div>
      )}
    </div>
  );
}

export default Resultado;
