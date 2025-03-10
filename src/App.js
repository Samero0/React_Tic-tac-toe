import { useState } from 'react';

//se le pasa value como parámetro para definir el valor que contendrá el botón
function Square({ value, onSquareClick }) {
  // se define clase para css 
  // se aigna función para cuando se haga click
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//función para definir el tablero con 9 botones Square
function Board({ xIsNext, squares, onPlay }) {
  
  // función para verificar si hay un ganador
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;  //si la casilla está ocupada, no se hace nada
    }
    
    //variable para intercambiar el estado del juego
    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "X";
    } else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    // se crea el tablero con 3 filas y 3 columnas
    <>
      <div className="status">{status}</div>
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

export default function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    //para que apunte a la ultima entrada del historial
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // variable para mostrar los movimientos realizados en el historial y poder "saltar" a un estado anterior
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir al movimiento #' + move;
      
    } else {
      description = 'Ir al inicio del juego';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    // estructura para mostrar el tablero y el historial de movimientos
  <div className="game">
    <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
    <div className="current-play">
      <ol>Estas en el movimiento: {currentMove + 1}</ol>
    </div>
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  </div>
  );
}

//no se detalla en la documentación pero se define la función para verificar si hay un ganador
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

