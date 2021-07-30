import React from 'react';
import './Buttons.css';

const Buttons = props => {
    return (
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
    );
};

export default Buttons;
