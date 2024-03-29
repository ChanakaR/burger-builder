import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'},
];


const buildControls = (props) => {
    return (          
        <div className={classes.BuildControls}>
            <p>Current Price: {props.price.toFixed(2)} (USD)</p>
            {controls.map(ctrl=>(
                <BuildControl 
                    label={ctrl.label} 
                    key={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed = {() => props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                >
                </BuildControl>
            ))}
            <button 
                className= {classes.OrderButton} 
                disabled= {!props.purchasable}
                onClick= {props.ordered}
                >
                ORDER NOW
            </button>
        </div>
    )
};

export default buildControls;