import { notFound } from "next/navigation";
import { api } from "@/service/server";
import { cookies } from "next/headers";
import UpdateForm from "./client_update_form";

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
      headers: { authorization: `Bearer ${jwt!.value}` },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar receita:", error);
    return null;
  }
};

async function RecipeServer_edit({ id }: { id: string }) {
  const recipe = await fetchRecipeById(id);
  if (!recipe) return notFound();
  return <UpdateForm recipe={recipe} />;
}

export default (RecipeServer_edit)
