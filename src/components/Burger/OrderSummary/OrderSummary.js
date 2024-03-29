import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with following Ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price (USD): {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}> CENCEL </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}> CONTINUE</Button>

        </Aux>
    );
}

export default orderSummary;