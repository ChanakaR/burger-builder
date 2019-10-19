import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
            purchasable: false,
            orderNowClicked: false,
        };
    }

    setPurchasableState = (ingredientsList) => {
        const sum = Object.keys(ingredientsList).map((ky)=>{
            return ingredientsList[ky];
        }).reduce((s,el)=>{
            return s+el;
        },0);
        this.setState({purchasable:sum>0});
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
        this.setPurchasableState(updatedIngredients);
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
        this.setPurchasableState(updatedIngredients);
    }

    orderNowClickHandler = () => {
        this.setState({orderNowClicked:true});
    }

    purchaseCancelHandler = () => {
        this.setState({orderNowClicked:false});
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
                <Modal show={this.state.orderNowClicked} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.orderNowClickHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;