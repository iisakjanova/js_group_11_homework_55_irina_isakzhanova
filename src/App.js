import {useState} from "react";
import {nanoid} from "nanoid";

import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";
import './App.css'

const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Salad', count: 0, id: nanoid(),},
        {name: 'Cheese', count: 0, id: nanoid(),},
        {name: 'Bacon', count: 0, id: nanoid(),},
        {name: 'Meat', count: 0, id: nanoid(),},
    ]);

    const increaseCount = id => {
        setIngredients(prevIngredients => prevIngredients.map(ingredient => {
            if (ingredient.id === id) {
                return {...ingredient, count: ingredient.count + 1};
            }

            return ingredient;
        }));
    };

    const decreaseCount = id => {
        setIngredients(prevIngredients => prevIngredients.map(ingredient => {
            if (ingredient.id === id) {
                const count = ingredient.count !== 0 ? ingredient.count - 1 : 0;
                return {...ingredient, count};
            }

            return ingredient;
        }));
    };

    const removeIngredient = id => {
        setIngredients(prevIngredients => prevIngredients.map(ingredient => {
            if (ingredient.id === id) {
                return {...ingredient, count: 0};
            }

            return ingredient;
        }));
    };

    return (
        <div className="App">
            <Ingredients
                ingredients={ingredients}
                onIncrease={increaseCount}
                onDecrease={decreaseCount}
                onRemove={removeIngredient}
            />
            <Burger
                ingredients={ingredients}
            />
        </div>
    );
};

export default App;
