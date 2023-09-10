import React from 'react';

function Marcador({ jugadorNombre, jugadorPuntos, pcPuntos }) {
  return (
    <div className=''>
      <h3>Marcador</h3>
      <p>{jugadorNombre}: {jugadorPuntos} VS PC: {pcPuntos}</p> {/* Muestra el nombre del jugador y sus puntos, tambien de la PC */}
    </div>
  );
}

export default Marcador;
