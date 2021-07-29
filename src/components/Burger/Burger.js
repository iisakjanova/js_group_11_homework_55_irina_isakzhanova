import React from 'react';
import './Burger.css';
import BreadTop from "../BreadTop/BreadTop";
import BreadBottom from "../BreadBottom/BreadBottom";
import Salad from "../Salad/Salad";
import Cheese from "../Cheese/Cheese";
import Meat from "../Meat/Meat";
import Bacon from "../Bacon/Bacon";

const Burger = () => {
    return (
        <div className="BurgerWrapper">
            <fieldset>
                <legend>Burger</legend>
                <div className="Burger">
                    <BreadTop />
                    <Salad />
                    <Cheese />
                    <Meat />
                    <Bacon />
                    <BreadBottom />
                </div>
            </fieldset>
        </div>
    );
};

export default Burger;
