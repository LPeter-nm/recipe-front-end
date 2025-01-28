"use client";

import { useEffect, useState } from "react";
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
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipe();
      setRecipes(data);
    };
    getRecipes();
  }, []);

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
            <div className="relative">
              <img className="w-72 h-40 rounded" src={recipe.imagem_url} alt={recipe.title} />
            </div>
            <div className="p-3">
              <h1 className="mb-2 text-lg">{recipe.title}</h1>
              <p className="text-xs">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRecipe;
