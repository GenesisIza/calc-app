import React from "react"
import PropTypes from 'prop-types'

  const Result = ({ value }) =>//asi recibe Result el parametro que envio desde App
    //const { value } = props una forma de hacer destructuring o en cuanto se recibe el parametro como se ve
   // console.log('Renderizacion de Result', value)//es un objeto json el que llega
     (
        <div className="result">
          { 
          value
          }
        </div>
      )
  

  Result.propTypes ={//aqui se haran todas las validaciones, en este caso validar que lo que venga como parametro sea un string.
    //el objeto contiene todas la propiedades que va a validar.
    value: PropTypes.string.isRequired//libreria ofrece tipos de datos para referenciar. y con el si required es que es obligatorio mandar la propiedad. no va funcionar si esta vacio.
  }
  Result.defaultProps = {//si es obligatorio un campo  no se envia al componente, entonces tendra este valor por defecto
    value: "0"
  }

export default Result;