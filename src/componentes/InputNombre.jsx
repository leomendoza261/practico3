import React, { useState } from 'react';

function InputNombre({ onNombreSubmit }) {
  /* Definición de un estado llamado 'nombre' utilizando el hook useState */
  const [nombre, setNombre] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value); /* Actualiza el estado 'nombre' con el valor del input */
  };

  /* Función que se llama cuando se hace clic en el botón "Comenzar" */
  const handleSubmit = () => {
    /* Llama a la función 'onNombreSubmit' y pasa el valor actual del nombre como argumento */
    onNombreSubmit(nombre);
  };

  // Renderiza el contenido del componente
  return (
    <div>
      <h2>Ingrese su nombre:</h2>
      {/* Input de tipo texto que llama a 'handleNombreChange' cuando su valor cambia */}
      <input type="text" onChange={handleNombreChange} />
      {/* Botón que llama a 'handleSubmit' cuando se hace clic en el */}
      <button onClick={handleSubmit}>Comenzar</button>
    </div>
  );
}

export default InputNombre;
