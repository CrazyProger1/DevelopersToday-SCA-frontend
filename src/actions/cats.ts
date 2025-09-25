"use server";

import { deleteCat, createCat, updateCat } from "@/services";
import { revalidatePath } from "next/cache";
import { Cat } from "@/types";

export const deleteCatAction = async (catId: number) => {
  const response = await deleteCat(catId);
  console.log(response);
  revalidatePath("/dashboard");

  return { success: response.success };
};

export const updateCatAction = async (catId: number, cat: Cat) => {
  const response = await updateCat(catId, cat);
  revalidatePath("/dashboard");
};

export const createCatAction = async (cat: Cat) => {
  const response = await createCat(cat);
  revalidatePath("/dashboard");
};
