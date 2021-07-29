import {useState} from "react";

import meatImage from './assets/meat.jpeg';
import cheeseImage from './assets/cheese.jpeg';
import saladImage from './assets/salad.jpeg';
import baconImage from './assets/bacon.jpeg';

const INGREDIENTS = [
    {name: 'meat', price: 50, image: meatImage,},
    {name: 'cheese', price: 20, image: cheeseImage,},
    {name: 'salad', price: 20, image: saladImage,},
    {name: 'bacon', price: 20, image: baconImage,},
];
const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'meat', count: 0,},
        {name: 'cheese', count: 0,},
        {name: 'salad', count: 0,},
        {name: 'bacon', count: 0,},
    ]);

    return (
        <div className="App"></div>
    );
};

export default App;
