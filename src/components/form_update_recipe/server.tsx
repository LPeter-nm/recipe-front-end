"use server";
import { api } from "@/service/server";
import { cookies } from "next/headers";

export const handleSubmit = async (formdata: FormData) => {
  
  const jwt = (await cookies()).get("JWT");
  const title = formdata.get("titulo");
  const description = formdata.get("descricao");
  const ingredients = formdata.get("ingredientes");
  const imagem_url = formdata.get("linkFoto");
  const category = formdata.get("categoria");
  const preparation_time = formdata.get("tempoPreparo");
  const difficulty = formdata.get("dificuldade");

  const response = await api.post(`recipe/`, {
    title,
    description,
    ingredients,
    preparation_time,
    difficulty,
    category,
    imagem_url,
  }, {
    headers: {
      authorization: `Bearer ${jwt!.value}`,
    },
  });

  return response.data.response;
};
