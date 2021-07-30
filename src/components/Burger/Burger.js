import {nanoid} from "nanoid";

import React from 'react';
import './Burger.css';
import BreadTop from "../BreadTop/BreadTop";
import BreadBottom from "../BreadBottom/BreadBottom";
import Salad from "../Salad/Salad";
import Cheese from "../Cheese/Cheese";
import Meat from "../Meat/Meat";
import Bacon from "../Bacon/Bacon";

const Burger = props => {
    const getIngredientComponent = (name) => {
        let ingredient;

        switch (name) {
            case 'Meat':
                ingredient = <Meat key={nanoid()} />;
                break;
            case 'Cheese':
                ingredient = <Cheese key={nanoid()} />;
                break;
            case 'Bacon':
                ingredient = <Bacon key={nanoid()} />;
                break;
            case 'Salad':
                ingredient = <Salad key={nanoid()} />;
                break;
            default:
                ingredient = <Salad key={nanoid()} />;
                break;
        }

        return ingredient;
    };

    const prepareIngredients = () => {
        const stuffing = [];

        props.ingredients.forEach(({count, name}) => {
            for (let i = 0; i < count; i++) {
                const component = getIngredientComponent(name);
                stuffing.push(component);
            }
        });

        return stuffing;
    };

    return (
        <div className="BurgerWrapper">
            <fieldset>
                <legend>Burger</legend>
                <div className="Burger">
                    <BreadTop />
                    {prepareIngredients()}
                    <BreadBottom />
                </div>
            </fieldset>
        </div>
    );
};

export default Burger;
