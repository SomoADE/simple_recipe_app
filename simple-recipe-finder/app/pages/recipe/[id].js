import { useRouter } from "next/router";
import recipesData from "../../data/recipes.json";

export default function RecipeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-2">Cook Time: {recipe.cookTime}</p>
      <h2 className="text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold">Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
