"use client";

import { useEffect, useState } from "react";
import { fetchRecipe } from "./server";
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

const Body_Receita = () => {
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchRecipe();
      setRecipe(data);
    };
    getRecipe();
  }, []);

  return (
    <div>
      <h1 className="mb-3 text-3xl">Receitas Cadastradas:</h1>
    </div>
  );
};

export default Body_Receita;
