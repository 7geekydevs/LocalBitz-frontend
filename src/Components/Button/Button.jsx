import React from 'react'
import './Button.scss'

const Button = (props) => {
    return (
        <div className="Button">
            <h2>{props.name}</h2>
        </div>
    )
}

export default Button