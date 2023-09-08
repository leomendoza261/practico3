import React, { useState } from 'react';

function InputNombre({ onNombreSubmit }) {
  const [nombre, setNombre] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = () => {
    onNombreSubmit(nombre);
  };

  return (
    <div>
      <h2>Ingrese su nombre:</h2>
      <input type="text" onChange={handleNombreChange} />
      <button onClick={handleSubmit}>Comenzar</button>
    </div>
  );
}

export default InputNombre;
