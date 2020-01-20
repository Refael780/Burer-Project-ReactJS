import React from 'react'
import Classes from './ToolBar.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) => (
    <header className={Classes.ToolBar}>
        <DrawerToggle clicked={props.clicke} />
        <div className={Classes.Logo}>
            <Logo />
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);

export default toolbar;