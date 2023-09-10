# Juego de Piedra, Papel y Tijeras

Este es un juego simple de Piedra, Papel y Tijeras implementado como una aplicación web utilizando React. El juego permite al jugador elegir una de las tres opciones (piedra, papel o tijeras) y jugar contra la computadora. El juego rastrea la puntuación y muestra el resultado de cada ronda.

## Componentes

La aplicación consta de varios componentes de React para gestionar diferentes partes del juego. Aquí hay una breve descripción de cada componente:

### Juego

El componente principal que maneja la lógica del juego, incluyendo el seguimiento de la puntuación y determinar el ganador del juego. También proporciona la interfaz de usuario para jugar y reiniciar el juego.

### Marcador

Este componente muestra el marcador del juego, que incluye la puntuación del jugador y la computadora.

### Resultado

El componente Resultado muestra las selecciones del jugador y la computadora, así como el resultado de cada ronda del juego. También carga imágenes dinámicamente basadas en las selecciones.

### Selector

El componente Selector muestra las opciones disponibles para que el jugador seleccione en el juego. Cada opción se representa como un botón con una imagen correspondiente.

## Uso

1. Ingresa tu nombre en la casilla y presiona en el boton "Comenzar"

2. Deberas seleccionar una de las 3 opciones del juego (Piedra, Papel y Tijeras).

3. Observaras el resultado de la ronda en la interfaza que informa el numero de ronda, el resultado de ronda (ganaste, perdiste o empate) y el marcador que informa la cantidad de rondas ganadas por el jugador y la PC.

4. Cuando se han llevado a cabo todas las ronda la interfaz se modificara informando al ganador del juego.

5. En caso de querer volver a jugar otra partida puede presionar en el boton "Reiniciar" que reiniciara las rondas y numero de rondas ganados por los jugadores.

## Reglas de Juego

El juego se juega entre dos personas, generalmente llamadas Jugador 1 y Jugador 2 (o el jugador humano contra la computadora en sete caso).

Cada jugador elige una de las tres opciones posibles: Piedra, Papel o Tijeras.

Piedra vence a Tijeras (Piedra gana).
Tijeras vencen a Papel (Tijeras ganan).
Papel vence a Piedra (Papel gana).
El resultado de cada ronda se determina según las reglas anteriores. Un jugador gana la ronda si su elección vence a la elección del otro jugador.

En caso de que ambos jugadores elijan la misma opción, la ronda termina en empate y no hay ganador.

El juego generalmente se juega al mejor de tres rondas o al mejor de cinco, lo que significa que el primer jugador en ganar tres (o cinco) rondas es el ganador del juego.


