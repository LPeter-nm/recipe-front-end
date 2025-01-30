"use client";

import { IoMdSync } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";
import Navbar_Home from "@/components/navbar_home";
import { useRouter } from "next/navigation";

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

export default function RecipeClient({ recipe }: { recipe: Recipe }) {
  const router = useRouter();

  const handleAlterar = (recipe_id : string) => {
    router.push(`/alterar_receita/${recipe_id}`);
  };

  const renderDifficultyIcons = (difficulty: string) => {
    const icons = [];
    let count = 0;

    switch (difficulty) {
      case "FACIL":
        count = 1;
        break;
      case "MEDIO":
        count = 2;
        break;
      case "DIFICIL":
        count = 3;
        break;
      default:
        count = 0;
    }
    for (let i = 0; i < count; i++) {
      icons.push(<LuCookingPot key={i} className="text-black w-6 h-6" />);
    }
    return icons;
  };
  return (
    <div>
      <Navbar_Home />
      <div className="min-h-screen flex flex-col justify-start items-center bg-amber-100">
        <div className="bg-amber-500 w-[95%] h-[150px] rounded-lg border-2 border-black">
          <h1 className="text-2xl justify-center flex">Descrição da Receita:</h1>
          <div className="flex justify-around items-center">
            <img
              src={recipe.imagem_url}
              alt={recipe.title}
              className="w-64 h-40 object-cover rounded-xl ml-9"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl">{recipe.title}</h1>
              <h1 className="text-2xl">{recipe.category}</h1>
              <div className="flex">{renderDifficultyIcons(recipe.difficulty)}</div>
            </div>
            <button
              onClick={() => handleAlterar(recipe.id)}
              className="bg-amber-500 px-4 py-2 rounded-lg border-2 border-black flex items-center h-10 w-48 text-xl"
            >
              <IoMdSync className="mr-2" /> Alterar receita!
            </button>
          </div>
        </div>
        <div className="p-24">
          <h1 className="text-xl flex mb-4">{recipe.description}</h1>
          <h1 className="text-3xl flex mb-2">Ingredientes</h1>
          <h1 className="text-xl flex mb-4">{recipe.ingredients}</h1>
          <h1 className="text-3xl flex mb-2">Tempo de Preparação</h1>
          <h1 className="text-xl flex mb-4">
            O Tempo de preparação será de cerca de {recipe.preparation_time} minutos.
          </h1>
        </div>
      </div>
    </div>
  );
}

