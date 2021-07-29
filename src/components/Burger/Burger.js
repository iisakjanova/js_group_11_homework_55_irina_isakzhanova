import React from 'react';
import './Burger.css';
import BreadTop from "../BreadTop/BreadTop";
import BreadBottom from "../BreadBottom/BreadBottom";

const Burger = () => {
    return (
        <div className="BurgerWrapper">
            <fieldset>
                <legend>Burger</legend>
                <div className="Burger">
                    <BreadTop />
                    <BreadBottom />
                </div>
            </fieldset>
        </div>
    );
};

export default Burger;
