import { useRouter } from "next/router";
import recipes from "../../data/recipes.json";

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-4xl font-bold">{recipe.name}</h1>
      <p>Cooking Time: {recipe.cook_time}</p>
      <h2 className="text-2xl mt-4">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl mt-4">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
