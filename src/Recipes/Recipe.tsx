import * as React from "react";
import { RecipeSource } from "../Constants";

export interface recipeIngredient {
  name: string;
  quantity: string;
}

export interface RecipeProps {
  title: string;
  ingredients: recipeIngredient[];
  instructions: string[];
  source?: string;
}
const Recipe: React.FC<RecipeProps> = (props) => {
  const { title, ingredients, instructions, source } = props;
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        {ingredients.map((ingredient) => (
          <ul>
             {ingredient.quantity} {ingredient.name}
          </ul>
        ))}
        <div>{instructions.map((instruction, index) =>(
            <ul>
              {index+1}. {instruction}
            </ul>
        ))}</div>
      </div>
      <div>{RecipeSource} {source}</div>
    </>
  );
};

export default Recipe;
