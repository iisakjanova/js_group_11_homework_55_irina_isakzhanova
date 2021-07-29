import {useState} from "react";
import {nanoid} from "nanoid";

import Ingredients from "./components/Ingredients/Ingredients";
import './App.css'


const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, id: nanoid(),},
        {name: 'Cheese', count: 0, id: nanoid(),},
        {name: 'Salad', count: 0, id: nanoid(),},
        {name: 'Bacon', count: 0, id: nanoid(),},
    ]);

    return (
        <div className="App">
            <Ingredients
                ingredients={ingredients}
            />
        </div>
    );
};

export default App;
