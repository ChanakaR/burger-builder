import React from 'react';

import Aux from '../../../hoc/Aux';

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
            <p>Continue to Checkout</p>
            <button> CENCEL </button>
            <button> CONTINUE</button>

        </Aux>
    );
}

export default orderSummary;