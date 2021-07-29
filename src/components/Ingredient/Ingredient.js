import React from 'react';
import {INGREDIENTS} from '../../constants.js';
import '../Ingredient/Ingredient.css';

const Ingredient = props => {
    return (
        <div className="Ingredient">
            <div className="IngredientImg" style={{
                backgroundImage: `url(${INGREDIENTS[props.ingredient.name].image})`,
            }}/>
            <p className="IngredientName">{props.ingredient.name}</p>
            <p className="IngredientQty">x{props.ingredient.count}</p>
            <div className="Buttons">
                <button
                    className="Btn BtnDecrease"
                    onClick={() => props.onDecrease(props.ingredient.id)}
                    disabled={props.ingredient.count === 0}
                >
                    -
                </button>
                <button
                    className="Btn BtnIncrease"
                    onClick={() => props.onIncrease(props.ingredient.id)}
                >
                    +
                </button>
                <button
                    className="Btn BtnRemove"
                    onClick={() => props.onRemove(props.ingredient.id)}
                    disabled={props.ingredient.count === 0}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Ingredient;