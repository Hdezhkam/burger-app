import React from 'react'
import classes from './Button.module.css'

const Button=(props)=> {
    return (
        <button 
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')} //btnType will be .Danger or .Success
        >
        {props.children}
        </button>
    )
}

export default Button
