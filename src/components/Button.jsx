import React from "react";
import PropTypes from "prop-types"

const Button = ({text, type, clickHandler}) => 
    (
      <button className={type } onClick={() => clickHandler(text)}> 
        <span>{text}</span>
      </button>
    )
//cuando la funcion button o la primcipal solo tiene el retirn y su bloque de codigo se puede eliminar las llaves y la palabra reservada return.

Button.propTypes = {//validaciones 
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button 
