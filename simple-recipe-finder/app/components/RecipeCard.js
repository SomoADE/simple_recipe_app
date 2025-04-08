// components/RecipeCard.js
const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p>
        <strong>Cooking Time:</strong> {recipe.cookingTime}
      </p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>
      <p>
        <strong>Steps:</strong> {recipe.steps}
      </p>
    </div>
  );
};

export default RecipeCard;
