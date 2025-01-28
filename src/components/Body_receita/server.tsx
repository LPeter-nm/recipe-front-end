"use server";
import { api } from "@/service/server";
import { cookies } from "next/headers";

export const handleRecipeView = async ({id}) => {
  const jwt = (await cookies()).get("JWT");
  const response = await api.get(`recipe/${id}`, {
    headers: {
      authorization: `Bearer ${jwt!.value}`,
    },
  });
  console.log(response.data)
  return response.data;
};
