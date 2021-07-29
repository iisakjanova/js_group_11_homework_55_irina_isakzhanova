import React from 'react';
import {INGREDIENTS} from '../../constants.js';

const Ingredient = props => {
    return (
        <div className="Ingredient">
            <div className="IngredientImg" style={{
                backgroundImage: `url(${INGREDIENTS[props.ingredient.name].image})`,
            }}/>
            <p className="IngredientName">{props.ingredient.name}</p>
            <p className="IngredientQty">x{props.ingredient.count}</p>
            <div className="Buttons">
                <button className="Btn BtnDecrease">-</button>
                <button className="Btn BtnIncrease">+</button>
                <button className="Btn BtnRemove">X</button>
            </div>
        </div>
    );
};

export default Ingredient;