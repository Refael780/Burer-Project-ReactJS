
///BurgerBuilder.js: This file is the main screen in the app
/// its build from two diffrent Parts
///  Parts 1: the dynamic image of the burger
///  Part 2:  The buttons of the ingrediants 
//--------------------------------------------

import React, { Component } from 'react';
import Aux from '../hoc/Auxliray'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal'
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery'

///=========================
/// GLOBAL VARIBALE
///=========================
const UNIT = 1;
const EMPTY = 0;
const PRICE_FOR_EACH_INGREDIENT = {
    meat: 1.5,
    salad: 0.4,
    bacon: 1,
    cheese: 0.8

};
///==================================
///   BurgerBuilder's Class
///==============================
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] ==> ctr');
    }

    ///========================
    /// STATE
    ///========================
    ///This state Contains the ingrediants Which make up the hamburger
    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4,
        purcheable: false,
        purching: false
    };

    ///=====================================
    ///         HANDLER FUNCTION
    ///======================================

    /*
     This function Update  The order's button according the ingrediants state
     if there at least one ingrediant the purcheable's state turnOn and opposite .
     input:  type of the ingredient
     output: none
     */
    UpdatePurchableState(tempIngrediant) {
        tempIngrediant = Object.keys(tempIngrediant)
            .map(key => {
                return tempIngrediant[key]
            }).reduce((sum, el) => {
                return sum + el;
            }, 0)
        this.setState({
            purcheable: tempIngrediant > 0
        })


    }

    /*
    This function add  one unit of choosen ingrediants .
    input:  type of the ingredient
    output: none
    */
    addIngrediantHandler = ((type) => {
        ///Update the Amount of the Ingredents
        let tempIngrediant;
        tempIngrediant = { ... this.state.ingredients };
        tempIngrediant[type] = tempIngrediant[type] + UNIT;

        ///Update Price
        let tempPrice = this.state.totalPrice;
        tempPrice = tempPrice + PRICE_FOR_EACH_INGREDIENT[type];


        this.setState({
            ingredients: tempIngrediant,
            totalPrice: tempPrice

        })

        this.UpdatePurchableState(tempIngrediant)
    });

    /* 
    This function add  one unit of choosen ingrediants .
    input:  type of the ingredient
    output: none
    */
    RemoveIngredientHandler = ((type) => {
        let updatIngredients = { ...this.state.ingredients };
        if (updatIngredients[type] !== EMPTY) {

            updatIngredients[type] = updatIngredients[type] - UNIT;


            let tempPrice = this.state.totalPrice;
            tempPrice = tempPrice - PRICE_FOR_EACH_INGREDIENT[type];

            this.setState({
                ingredients: updatIngredients,
                totalPrice: tempPrice
            });
        }
        this.UpdatePurchableState(updatIngredients)
    })

    /*
    This function update the purchinf field 
    in the state to true
    input: none
    output: none
    */
    purchseHanler = () => {
        if (this.state.purching) {
            this.setState({
                purching: false
            })
        }
        else {
            this.setState({
                purching: true
            })
        }
    }
    ContinueOrderHandler = () => {
        alert("//TODO");
    }
    ///=========================
    ///RENDER FUNCTION
    ///=========================
    render() {



        const isDisabelIngrediants =
        {
            ...this.state.ingredients
        };
        for (let type in isDisabelIngrediants) {
            isDisabelIngrediants[type] = isDisabelIngrediants[type] <= 0;
        }


        return (

            <Aux>

                <Modal modalClosed={this.purchseHanler} showingBacdrop={this.state.purching} show={this.state.purching}>
                    <OrderSummery continueOrder={this.ContinueOrderHandler} cancelOrder={this.purchseHanler} ingredients={this.state.ingredients}>
                    </OrderSummery>
                </Modal>

                <Burger ingredients={this.state.ingredients} ></Burger> {/*StateLess component That Get the Ingrediants from  the State*/}

                <BuildControls
                    updatePurching={this.purchseHanler}
                    totalPrice={this.state.totalPrice}
                    disableLessButton={isDisabelIngrediants}
                    RemoveIngredientClick={this.RemoveIngredientHandler}
                    AddIngredientClick={this.addIngrediantHandler}
                    isPerch={this.state.purcheable}
                />

            </Aux>
        );
    }
}

export default BurgerBuilder