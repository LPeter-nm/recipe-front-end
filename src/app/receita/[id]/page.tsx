import { notFound } from "next/navigation";
import { api } from "@/service/server";
import { cookies } from "next/headers";
import Navbar_Home from "@/components/navbar_home";

type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  preparation_time: number;
  difficulty: string;
  category: string;
  imagem_url: string;
};


const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  const jwt = (await cookies()).get("JWT");
  try {
    const response = await api.get(`/recipe/${id}`, {
      headers: {
        authorization: `Bearer ${jwt!.value}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar receita:", error);
    return null;
  }
};

export default async function RecipeDetails({ params }: { params: { id: string } }) {
  const recipe = await fetchRecipeById(params.id);

  if (!recipe) {
    return notFound();
  }

  return (
    <div>
      <Navbar_Home/>
    <div className="max-w-6xl mx-auto p-11 bg-white shadow-lg rounded-lg">
      <img className="w-full h-60 object-cover rounded-md mb-4" src={recipe.imagem_url} alt={recipe.title} />
      <p className="text-gray-700">{recipe.description}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Ingredientes:</h2>
        <p className="text-gray-700">{recipe.ingredients}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Tempo de Preparo:</h2>
        <p className="text-gray-700">{recipe.preparation_time} minutos</p>
      </div>
    </div>
    </div>
  );
}
