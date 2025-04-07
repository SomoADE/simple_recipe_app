import React from "react";
import { useRouter } from "next/router";
import recipesData from "../../data/recipes.json"; // Import recipes from local JSON

const RecipePage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the recipe ID from URL
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold">{recipe.name}</h1>
      <h2 className="text-2xl mt-4">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl mt-4">Instructions</h2>
      <p>{recipe.instructions}</p>
      <p>
        <strong>Cook Time:</strong> {recipe.cookTime} minutes
      </p>
    </div>
  );
};

export default RecipePage;
