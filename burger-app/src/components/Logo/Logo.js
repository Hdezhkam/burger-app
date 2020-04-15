import React from 'react'
import burgerLogo from '../../assets/images/original.png'
import classes from './Logo.module.css'

const Logo=(props)=> {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="MyLogo" className={classes.img}/>
        </div>
    )
}

export default Logo
