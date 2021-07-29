import React from 'react';
import './Ingredients.css';
import Ingredient from "../Ingredient/Ingredient";

const Ingredients = props => {
    return (
        <div className="Ingredients">
            <fieldset>
                <legend>Ingredients</legend>
                {props.ingredients.map(ingredient => (
                    <Ingredient
                        key={ingredient.id}
                        ingredient={ingredient}
                    />
                ))}
            </fieldset>
        </div>
    );
};

export default Ingredients;
