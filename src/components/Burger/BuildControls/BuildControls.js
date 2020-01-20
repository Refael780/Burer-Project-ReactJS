import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },

]
const buildControls = (props) => (
    <div className={classes.BuildControls} >
        <p><strong>Price: {props.totalPrice}</strong></p>
        {controls.map((ctrl =>
            <BuildControl
                rem={props.RemoveIngredientClick}
                add={() => props.AddIngredientClick(ctrl.type)}
                key={ctrl.label}
                type={ctrl.type}
                label={ctrl.label}
                disabled={props.disableLessButton[ctrl.type]}
            ></BuildControl>
        ))}
        <button onClick={props.updatePurching} disabled={!props.isPerch} className={classes.OrderButton}>ORDER NOW</button>
    </div>

);


export default buildControls