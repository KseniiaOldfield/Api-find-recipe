import './App.css';
import { useEffect, useState } from 'react';
import video from './fun-chef.mp4';
import RecipeIceCream from './RecipeApi';
import icon from './frying-pan.png';

function App() {
  const MY_ID = "a23270b4";
  const MY_KEY = "0722431710355a185372e2c0b58da015";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('broccoli')

  useEffect(() => {
    const getRecipe = async ()=> {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  
  return (<div className="App">
  <div>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
      </div>
      <div className='parent'>
      <h1>The chef recommends!</h1>
      </div>
      <div className='parent'>
      <h2>Find the recipe.</h2>
      </div>
      <div className='parent'>
        <form className='items' onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
          <button className='btn'>
            <img src={icon} className='icon' alt='fry'/>
          </button>
        </form>
      </div>
  <div>
      {myRecipes.map((element, id ) => (
        <RecipeIceCream key={id} label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} totalTime={element.recipe.totalTime} ingredients ={element.recipe.ingredientLines}/>
      ))}
  </div>
</div>
</div>
  );
}

export default App;