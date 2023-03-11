import React from 'react'
import { ButtonAttributes } from '../../utils/Interfaces/index.dto'

const Button = ({className, type, onClick, buttonText}: ButtonAttributes) => {
  return (
    <div>
        <button className={className} type={type} onClick={onClick}>
            {buttonText}
        </button>
    </div>
  )
}

export default Button
