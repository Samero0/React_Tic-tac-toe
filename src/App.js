import { useState } from 'react';

//se le pasa value como parámetro para definir el valor que contendrá el botón
function Square({ value, onSquareClick }) {
  // se define clase para css y para usar con react 
  // se aigna función para cuando se haga click
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//función para definir el tablero con 9 botones Square
export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {

    if (squares[i]){
      return;  //si el lugar está ocupado, no se hace nada
    }

    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "X";
    } else{
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext);  //cambia el turno de jugador entre X y O
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}



