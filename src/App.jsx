//importacion.
import React from 'react'
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from "./components/MathOperations";
import Result from './components/Result'
import './App.css' //asi se importan los estilos 


//generacion de la funcion del componente.
const App = () => {//tiene que corresponder con el nombre del archivo.//funcion tipo flecha 
//cuerpo de la funcion
//para asignar clases css al jsx no se puede usar el tradicional class porque eso es ua clase JS en su lugar se utiliza className.
//desde componente padre app le envio un numero a componente hijo Result

    return (
      <main className="react-calculator">
        <Result value={"0"} />
        <Numbers onClickNumber = {number => console.log("click en number", number)}/>
        <Functions
          onDelete={
            () =>
              console.log("eliminar")
          } 
          onContentClear = {
            () =>
            console.log("limpiar")
          }
        />
        <MathOperations
          onClickOperation= {
              operacion => 
                 console.log("Operation:", operacion)
            }
          onClickEqual = {
                equal =>
                console.log("Equal:", equal)
            }
        />
      </main>
    );//si son mas lineas debe ir entre parentesis
}
//exportacion.Varias maneras: por defecto una sola importacion, un componente por archivo
export default App;  
