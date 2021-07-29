import React from 'react';
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
                        onIncrease={props.onIncrease}
                        onDecrease={props.onDecrease}
                        onRemove={props.onRemove}
                    />
                ))}
            </fieldset>
        </div>
    );
};

export default Ingredients;
