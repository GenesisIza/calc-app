//importacion.
import React from 'react'
import Result from './components/Result';
import Button from "./components/Button";
import './App.css' //asi se importan los estilos 
import MathOperations from './components/MathOperations';


//generacion de la funcion del componente.
const App = () => {//tiene que corresponder con el nombre del archivo.//funcion tipo flecha 
//cuerpo de la funcion
//para asignar clases css al jsx no se puede usar el tradicional class porque eso es ua clase JS en su lugar se utiliza className.
//desde componente padre app le envio un numero a componente hijo Result
const clickHandlerFunction = text => {
  console.log("Button.clickHandler1",text);
};
    return (
      <main className="react-calculator">
        <Result value={"0"} />
        <div className="numbers">
          <Button text="1" clickHandler={clickHandlerFunction} />
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="functions">
          <button>clear</button>
          <button>r</button>
        </div>
        <div className="math-operations">
          <MathOperations text="+"/>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>=</button>
        </div>
      </main>
    );//si son mas lineas debe ir entre parentesis
}
//exportacion.Varias maneras: por defecto una sola importacion, un componente por archivo
export default App;  
