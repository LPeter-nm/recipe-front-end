"use server"

import { api } from "@/service/server";
import { cookies } from "next/headers";

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

const Update_Recipe = async (id: string, data: Recipe) => {
    const jwt = (await cookies()).get("JWT");
    try {
      const response = await api.put(`/recipe/${id}`, data, {
        headers: { authorization: `Bearer ${jwt!.value}` },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar receita:", error);
      return null;
    }
};

export default Update_Recipe;
