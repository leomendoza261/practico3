import React, { useState } from 'react';

function InputNombre({ onNombreSubmit }) {
  // Definición de un estado llamado 'nombre' utilizando el hook useState
  const [nombre, setNombre] = useState('');
  // Estado adicional para rastrear si se ha ingresado un nombre válido
  const [nombreValido, setNombreValido] = useState(false);

  const handleNombreChange = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre); // Actualiza el estado 'nombre' con el valor del input

    // Verifica si el nombre es válido (no está vacío)
    setNombreValido(nuevoNombre.trim() !== '');
  };

  // Función que se llama cuando se hace clic en el botón "Comenzar"
  const handleSubmit = () => {
    if (nombreValido) {
      // Llama a la función 'onNombreSubmit' solo si se ha ingresado un nombre válido
      onNombreSubmit(nombre);
    }
  };

  // Renderiza el contenido del componente
  return (
    <div>
      <h2>Ingrese su nombre:</h2>
      {/* Input de tipo texto que llama a 'handleNombreChange' cuando su valor cambia */}
      <input type="text" onChange={handleNombreChange} />
      {/* Botón que llama a 'handleSubmit' cuando se hace clic en él, pero está deshabilitado si el nombre no es válido */}
      <button onClick={handleSubmit} disabled={!nombreValido}>
        Comenzar
      </button>
    </div>
  );
}

export default InputNombre;
