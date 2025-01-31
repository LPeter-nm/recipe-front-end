"use server";
import { api } from "@/service/server";
import { cookies } from "next/headers";

export const fetchUpdateRecipe = async (id: string) => {
  const jwt = (await cookies()).get("JWT");
  console.log(jwt!.value)
  const response = await api.put(`recipe/favorite/${id}`, {}, {
    headers: {
      authorization: `Bearer ${jwt!.value}`,
    },
  });
  return response.data;
};
