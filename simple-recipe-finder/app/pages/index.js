// pages/index.js
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (ingredient) => {
    // Fetch recipes from JSON file and filter them based on the ingredient
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredRecipes = data.filter((recipe) =>
          recipe.ingredients.some((ingredientInRecipe) =>
            ingredientInRecipe.toLowerCase().includes(ingredient.toLowerCase())
          )
        );
        setRecipes(filteredRecipes);
      });
  };

  return (
    <div>
      <h1>Welcome to the Simple Recipe Finder App</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
