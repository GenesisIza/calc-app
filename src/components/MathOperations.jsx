import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const MathOperations = ({onClickOperation, onClickEqual}) =>{
    return(
    <button>{text}</button>
    )
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations