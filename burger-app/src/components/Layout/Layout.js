import React from 'react'
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';





function Layout(props) {
    return (
        <Aux>
            <Toolbar/>
            <SideDrawer/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout
