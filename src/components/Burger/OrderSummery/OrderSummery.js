import React from 'react';
import Aux from '../../../hoc/Auxliray'
import Button from '../../UI/Button/Button'
const orderSummery = (props) => {
    const sumIngrediants = Object.keys(props.ingredients).map(
        (InKey => {
            return <div key={InKey}>
                <li>
                    <span> {InKey}</span>:{props.ingredients[InKey]}
                </li>
            </div>
        }))

    return (
        <Aux>
            {console.log("[shouldComponentUpdate] Modal changed")}
            <h3>Your Teasty Order</h3>
            <p>Your burger wiil be with the follow ingredients:</p>
            <ul>
                {sumIngrediants}
            </ul>

            <Button clicked={props.cancelOrder} btnType='Danger'>CANCLE</Button>
            <Button clicked={props.continueOrder} btnType='Success' >CONTINUE</Button>

        </Aux>
    )
}
export default orderSummery;