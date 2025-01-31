"use server";

import { api } from "@/service/server";
import { cookies } from "next/headers";

const deleteRecipe = async (id: string) => {
  const jwt = (await cookies()).get("JWT");
  if (!jwt) {
    console.error("JWT não encontrado");
    return null;
  }

  try {
    const response = await api.delete(`/recipe/${id}`, {
      headers: { authorization: `Bearer ${jwt.value}` },
    });

    if (response.status === 200) {
      console.log("Receita deletada com sucesso");
    } else {
      console.error("Erro ao deletar receita:");
    }

    return response.status;
  } catch (error) {
    console.error("Erro ao deletar receita:", error);
    return null;
  }
};

export { deleteRecipe };
