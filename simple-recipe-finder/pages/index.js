import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import recipesData from "../data/recipes.json"; // Import recipes from local JSON file

const Home = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  const handleSearch = (query) => {
    const filtered = recipesData.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Simple Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
