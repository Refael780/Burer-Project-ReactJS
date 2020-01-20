import React from 'react'
import Classes from './SideDrawer.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Auxliray'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={[Classes.SideDrawer, props.open ? Classes.Open : Classes.Close].join(' ')}>
                <div className={Classes.Logo}>
                    <Logo click={props.clicked} />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
};


export default sideDrawer;