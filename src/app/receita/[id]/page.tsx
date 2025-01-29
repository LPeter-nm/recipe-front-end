import RecipeServer from "@/components/recipe/server_recipe";

export default async function RecipePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <RecipeServer id={id} />;
}

