import "./App.css";
import Recipe from "./Recipes/Recipe";

function App() {
  const defaultRecipe = {
    title: "Peanut Butter & Jelly",
    ingredients: [
      {
        name: "Peanut Butter",
        quantity: "2 Tbsp",
      },
      {
        name: "Jelly",
        quantity: "1 Tbsp",
      },
    ],
    instructions: [
      "Get two Pieces of bread",
      "Spread Jelly on one piece of bread",
      "Spread Peanut Butter on other piece of bread",
      "Put pieces together",
      "Ta Da! et Voila!",
    ],
    source: "the game",
  };
  return (
    <div className="App">
      <Recipe
        title={defaultRecipe.title}
        ingredients={defaultRecipe.ingredients}
        instructions={defaultRecipe.instructions}
        source={defaultRecipe.source}
      ></Recipe>
    </div>
  );
}

export default App;
