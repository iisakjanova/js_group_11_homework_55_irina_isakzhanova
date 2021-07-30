import React from 'react';
import {INGREDIENTS} from '../../constants.js';
import '../Ingredient/Ingredient.css';
import Buttons from "../Buttons/Buttons";

const Ingredient = props => {
    return (
        <div className="Ingredient">
            <div className="IngredientImg" style={{
                backgroundImage: `url(${INGREDIENTS[props.ingredient.name].image})`,
            }}/>
            <p className="IngredientName">{props.ingredient.name}</p>
            <p className="IngredientQty">x{props.ingredient.count}</p>
            <Buttons
                onDecrease={props.onDecrease}
                onIncrease={props.onIncrease}
                onRemove={props.onRemove}
                ingredient={props.ingredient}
            />
        </div>
    );
};

export default Ingredient;