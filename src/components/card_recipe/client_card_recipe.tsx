'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchRecipes } from "./server_card_recipe";
import { FaHeart, FaListAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { fetchUpdateRecipe } from "./server_card_update_recipe";

type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  preparation_time: number;
  difficulty: string;
  favorite: boolean;
  category: string;
  imagem_url: string;
};

const CardRecipe = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favorite, setFavorite] = useState<Recipe["favorite"]>();
  const [category,setCategory] = useState("");
  const [showCategory,setshowCategory] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  
  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, [favorite, category]);


  const recipesFilter = recipes.filter(recipe => {
    const filterFavoriteRecipes = showFavorites ? recipe.favorite : recipes;
    const filterCategoryRecipes = showCategory ? recipe.category === category : true;
    return filterCategoryRecipes && filterFavoriteRecipes;
  });

  const handleFilterFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleFilterCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
    setshowCategory(event.target.value !== ""); 
  };

  const handleUpdateRecipe = async (id: string) => {
    const data = await fetchUpdateRecipe(id)
    setFavorite(data)
  }

  const handleRecipeView = (id: string) => {
    router.push(`/receita/${id}`);
  };
  return (
    <div>
      <h1 className="mb-3 text-3xl">Receitas Cadastradas:</h1>
      <div className="flex justify-normal gap-6 mb-8">
        <button onClick={ () => handleFilterFavorites()} className="bg-amber-500 border-2 border-black text-black rounded-lg p-2 flex items-center gap-2">
          <FaHeart /> Filtrar por Favoritas
        </button>
        <select onChange={(e) => handleFilterCategory(e)} className="bg-amber-500  border-2 border-black text-black rounded-lg p-2 flex items-center gap-2">
        <option value="">Filtrar por Categoria</option>
          <option value="Aperitivo">Aperitivo</option>
          <option value="Entrada">Entrada</option>
          <option value="Prato Principal">Prato Principal</option>
          <option value="Sobremesa">Sobremesa</option>
          <option value="Bebida">Bebida</option>
          <option value="Café da Manhã">Café da Manhã</option>
          <option value="Lanche">Lanche</option>
          <option value="Jantar">Jantar</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-9 justify-center mb-10">
        {recipesFilter.map((recipe) => (
          <div key={recipe.id} className="bg-amber-500 w-[275px] h-[294px] rounded-xl">
            <button onClick={() => handleRecipeView(recipe.id)}>
              <div className="relative">
                <img className="w-[275px] h-[183px] rounded-t-[12px]" src={recipe.imagem_url} alt={recipe.title} />
              </div>
            </button>
            <div>
              <div className="p-2">
                <div className="flex justify-between">
                  <button onClick={() => handleRecipeView(recipe.id)}>

                    <h1 className="mb-[1px] text-[23px] text-left ">
                      {
                        recipe.title.length > 18 ? recipe.title.substring(0, 16) + ".." : recipe.title
                      }
                    </h1>
                  </button>

                  <button onClick={() => handleUpdateRecipe(recipe.id)}>
                    {
                      recipe.favorite ? <MdFavorite className="size-7  text-red-600 border border-red-600 rounded-full p-1 hover:border-red-400 hover:text-red-400" /> : <MdFavoriteBorder className="size-7  text-black border border-black rounded-full p-1 hover:border-red-600 hover:text-red-600" />
                    }
                  </button>
                </div>
              </div>
              <button onClick={() => handleRecipeView(recipe.id)}>
                <p className="text-xs text-left px-2">{recipe.description.length > 100 ? recipe.description.substring(0, 100) + "..." : recipe.description}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default CardRecipe;
