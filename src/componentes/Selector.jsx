import React from 'react';

function Selector({ opciones, onSeleccion }) {
  return (
    <div className='opciones'>
      {opciones.map((opcion) => (
        <button key={opcion} onClick={() => onSeleccion(opcion)}>
          <img src={require(`../images/${opcion}.png`)} alt={opcion} />
        </button>
      ))}
    </div>
  );
}

export default Selector;
