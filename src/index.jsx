import React from 'react'//las librerias que estan dentro del packaje json se pueden invocar directamente con su nombre  son en minuscula.
import ReactDOM from 'react-dom'//necesaria para index.js permite que funcione en el navegador.

//importar el componente
import App from './App'//sin extension

//utilizar el componente
ReactDOM.render(<App/>, 
                document.getElementById('root'))//redenderiza la aplicacion, el primer parametro es:espera el contenido de la applicacion  el segundo, parametro es:punto de montaje de lo que se especifico en el primer parametro.