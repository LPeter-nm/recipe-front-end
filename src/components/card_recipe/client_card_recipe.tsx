'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchRecipes } from "./server_card_recipe";
import { FaHeart, FaListAlt } from "react-icons/fa"; 

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

const CardRecipe = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  const handleRecipeView = (id: string) => {
    router.push(`/receita/${id}`);
  };

  return (
    <div>
      <h1 className="mb-3 text-3xl">Receitas Cadastradas:</h1>
      <div className="flex justify-normal gap-6 mb-8">
        <button className="bg-amber-500 text-black rounded-lg p-2 flex items-center gap-2">
          <FaHeart /> Filtrar por Favoritas
        </button>
        <button className="bg-amber-500 text-black rounded-lg p-2 flex items-center gap-2">
          <FaListAlt /> Filtrar por Categoria
        </button>
      </div>
      <div className="flex flex-wrap gap-9 justify-center mb-10">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-amber-500 w-72 rounded-xl">
            <button onClick={() => handleRecipeView(recipe.id)}>
              <div className="relative">
                <img className="w-72 h-40 rounded" src={recipe.imagem_url} alt={recipe.title} />
              </div>
              <div className="p-3">
                <h1 className="mb-2 text-lg">{recipe.title}</h1>
                <p className="text-xs">{recipe.description}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRecipe;
