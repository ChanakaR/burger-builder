import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.4,
    cheese: 0.5,
    meat: 0.7,
}

class BurgerBuilder extends Component{

    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice: 4,
        };
    }

    addIngredientHandler = (type) => {
        const old_count = this.state.ingredients[type];
        const new_count = old_count + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = new_count;
        const new_price = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients,totalPrice:new_price});
    }

    removeIngredientHandler = (type) => {
        const old_count = this.state.ingredients[type];
        if(old_count <= 0){
            return;
        }
        const new_count = old_count - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = new_count;
        const new_price = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients,totalPrice:new_price});
        
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;