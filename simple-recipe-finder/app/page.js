"use client";

import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to store selected recipe details

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter ingredients to search.");
      return;
    }

    try {
      // Fetch recipes based on the ingredient
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals); // Store meal data
      } else {
        alert("No recipes found for this ingredient.");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      alert("An error occurred while searching. Please try again.");
    }
  };

  // Handle recipe image click to fetch and display detailed recipe info
  const handleClick = async (idMeal) => {
    try {
      // Fetch detailed recipe data using the meal ID
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();

      if (data.meals) {
        setSelectedRecipe(data.meals[0]); // Set the selected recipe's details
      }
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Simple Recipe Finder</h1>
      <input
        type="text"
        placeholder="Enter ingredients..."
        className="p-2 border border-gray-300 rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Search Recipes
      </button>

      {/* Display search results */}
      <div className="mt-6">
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((meal) => (
              <li key={meal.idMeal} className="mb-4">
                <h2 className="text-lg font-bold">{meal.strMeal}</h2>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-32 h-32 object-cover cursor-pointer"
                  onClick={() => handleClick(meal.idMeal)} // Trigger handleClick on image click
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found.</p>
        )}
      </div>

      {/* Display detailed recipe info if a recipe is selected */}
      {selectedRecipe && (
        <div className="mt-6 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-bold">{selectedRecipe.strMeal}</h2>
          <img
            src={selectedRecipe.strMealThumb}
            alt={selectedRecipe.strMeal}
            className="w-32 h-32 object-cover mb-4"
          />
          <h3 className="font-semibold">Ingredients:</h3>
          <ul>
            {Object.keys(selectedRecipe)
              .filter(
                (key) => key.startsWith("strIngredient") && selectedRecipe[key]
              ) // Filter out null ingredients
              .map((ingredientKey, index) => {
                const ingredient = selectedRecipe[ingredientKey];
                const measure =
                  selectedRecipe[`strMeasure${ingredientKey.slice(-1)}`]; // Get corresponding measure
                return (
                  <li key={index} className="mb-2">
                    {ingredient} - {measure}
                  </li>
                );
              })}
          </ul>
          <p className="mt-4">{selectedRecipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
}
