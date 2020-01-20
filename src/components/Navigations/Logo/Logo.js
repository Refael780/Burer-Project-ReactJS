import React from 'react'
import Classes from './Logo.css'
import LogoImage from '../../../assets/images/burger.png'
const logo = (props) => (

    <div className={Classes.Logo}>
        <img alt="" onClick={props.click} src={LogoImage} />
    </div>
);

export default logo;