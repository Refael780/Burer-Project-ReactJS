/// Burger.js: This file is the part thet containt
///            the burger itself
/// Connect With: BurgerIngredient -get the ingrediant from the 
///               the StateFull  BurgerIngredient's components 
///               by props from the state of BurgerBuilder
//-------------------------------------------------------

import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {

    /// arr its the ingrediants 
    let arr = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIngredient key={key + i} type={key} />
        });
    }).reduce((arrv, el) => {

        return arrv.concat(el);
    }, []);


    console.log(arr);


    return (


        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />

            {arr.length !== 0 ? arr : <h3>Please add ingrediants</h3>}
            <BurgerIngredient type="bread-bottom" />


        </div>
    );
}
export default burger