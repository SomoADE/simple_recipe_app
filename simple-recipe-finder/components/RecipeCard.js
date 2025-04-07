import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card border p-4 rounded-lg">
      <h2 className="text-xl font-bold">{recipe.name}</h2>
      <p>{recipe.ingredients.join(", ")}</p>
      <a href={`/recipe/${recipe.id}`} className="text-blue-500">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
