import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component {

    state={
        showSideDrawer: true
    }

    SideDrawerCloseHandler=()=>{
        this.setState({
            showSideDrawer: false
        })
    }

    SideDrawerToggleHandler=(prevState)=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
                <SideDrawer 
                closed={this.SideDrawerCloseHandler}
                open={this.state.showSideDrawer}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout




