import React, { Component } from 'react'
import Aux from '../../hoc/Auxliray'
import classes from './Layout.css'
import ToolBar from '../Navigations/ToolBar/ToolBar'
import SideDrawer from '../Navigations/SideDrawer/SideDrawer'


class Layout extends Component {

    state = {
        isSideDrawerOpen: false
    }

    ToggleSideSrawerHandler = () => {
        this.setState((prevState) => {
            return { isSideDrawerOpen: !prevState.isSideDrawerOpen }
        });
    }
    CloseSideSrawerHandler = () => {
        this.setState({
            isSideDrawerOpen: false
        });
    }


    render() {

        return (
            <Aux>
                <ToolBar clicke={this.ToggleSideSrawerHandler} />
                <SideDrawer
                    close={this.CloseSideSrawerHandler}
                    open={this.state.isSideDrawerOpen}  ></SideDrawer>
                <main className={classes.content}>
                    {this.props.children}
                </main>

            </Aux>

        )
    }


}


export default Layout