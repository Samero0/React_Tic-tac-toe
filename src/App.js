//se le pasa value como parámetro para definir el valor que contendrá el botón
function Square({ value }) {

  //se define la función que se ejecutará cuando se haga clic
  function handleClick() {
    console.log("hiciste clic!");
  }

  //define el botón con código html
  //añade clase square para css
  return <button className="square"
  
  //cuando el botón es clicado, ejecuta la función handleClick()
  onClick={handleClick}>
  
  {value}
  
  </button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}

