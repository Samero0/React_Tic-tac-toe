import { useState } from 'react';

//se le pasa value como parámetro para definir el valor que contendrá el botón
function Square({ value }) {

  //value almacena el valor y setValue es una función que se puede usar para cambiar el valor. 
  //El null pasado a useState se usa como valor inicial para esta variable de estado
  const [value, setValue] = useState(null);

  //se define la función que se ejecutará cuando se haga clic
  function handleClick() {
    setValue("X");
  }

  //define el botón con código html
  //añade clase square para css
  return <button className="square"
  
  //cuando el botón es clicado, ejecuta la función handleClick()
  onClick={handleClick}>
  
  {value}
  
  </button>;
}

//funcion para definir el tablero con 9 botones Square
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

