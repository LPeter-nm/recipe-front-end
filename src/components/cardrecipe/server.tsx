"use server";

import { api } from "@/service/server";
import { cookies } from "next/headers";

export const fetchRecipes = async () => {
  const jwt = (await cookies()).get("JWT");
  const response = await api.get(`recipes`, {
    headers: {
      authorization: `Bearer ${jwt!.value}`,
    },
  });
  return response.data;
};
