import React from 'react';
import './Ingredients.css';
import {INGREDIENTS} from '../../constants.js';

const Ingredients = props => {
    return (
        <div className="Ingredients">
            <fieldset>
                <legend>Ingredients</legend>
                {props.ingredients.map(ingredient => (
                    <div className="Ingredient" key={ingredient.id}>
                        <div className="IngredientImg" style={{
                            backgroundImage: `url(${INGREDIENTS[ingredient.name].image})`,
                        }}/>
                        <p className="IngredientName">{ingredient.name}</p>
                        <p className="IngredientQty">x{ingredient.count}</p>
                        <div className="Buttons">
                            <button className="Btn BtnDecrease">-</button>
                            <button className="Btn BtnIncrease">+</button>
                            <button className="Btn BtnRemove">X</button>
                        </div>
                    </div>
                ))}
            </fieldset>
        </div>
    );
};

export default Ingredients;
