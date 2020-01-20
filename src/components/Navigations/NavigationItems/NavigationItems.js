import React from 'react'
import Classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (
    <ul className={Classes.NavigationItems}>
        <NavigationItem link="/" active >Burger Bulder</NavigationItem>
        <NavigationItem link="/" >Chackout</NavigationItem>
    </ul>
);

export default navigationItems