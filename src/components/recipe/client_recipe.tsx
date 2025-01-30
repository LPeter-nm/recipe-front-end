"use client";

import { IoMdSync } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";
import Navbar_Home from "@/components/navbar_home";
import { useRouter } from "next/navigation";
import { CiTrash } from "react-icons/ci";

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
      <div className="min-h-screen flex flex-col justify-start items-center bg-amber-100 pb-10 pl-10 pr-10  ">
        <div className="bg-amber-500 w-[95%] h-[163px] rounded-b-lg border-2 border-black border-t-0">
          <h1 className="text-2xl justify-center flex pt-1">Descrição da Receita:</h1>
          <div className="flex justify-between">
          <div className="flex gap-7 items-center">
            <img
              src={recipe.imagem_url}
              alt={recipe.title}
              className="w-80 h-50 object-cover rounded-lg ml-9 border-2 border-black"
            />
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">{recipe.title}</h1>
              <h1 className="text-2xl">{recipe.category}</h1>
              <h1 className="font-bold text-1xl translate-y-3">Dificuldade</h1>
              <div className="flex translate-y-3 ">{renderDifficultyIcons(recipe.difficulty)}</div>
            </div>
            </div>
            <div className="flex gap-3 pr-5">

            <button
              onClick={() => handleAlterar(recipe.id)}
              className="bg-amber-500 px-4 py-2 rounded-lg border-2 border-black flex items-center h-10 w-auto text-xl translate-y-24 "
            >
              <IoMdSync className="mr-2" /> Alterar receita!
            </button>
            <button  className="bg-amber-500 px-4 py-2 rounded-lg border-2 border-black flex items-center h-10 w-auto text-xl translate-y-24 "> <CiTrash className="mr-2" />  Excluir </button>

            </div>
          </div>
        </div>
        <div className="pt-28 pr-96">
          <h1 className="text-xl flex mb-4 pr-96">{recipe.description}</h1>
          <h1 className="text-3xl flex mb-2 font-bold">Ingredientes</h1>
          <h1 className="text-xl flex mb-4">{recipe.ingredients}</h1>
          <h1 className="text-3xl flex mb-2 font-bold">Tempo de Preparação</h1>
          <h1 className="text-xl flex mb-4">
            O Tempo de preparação será de cerca de {recipe.preparation_time} minutos.
          </h1>
        </div>
      </div>  
    </div>
  );
}
