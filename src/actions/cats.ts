"use server";

import { deleteCat, createCat, updateCat } from "@/services";
import { revalidateTag } from "next/cache";
import { Cat } from "@/types";

export const deleteCatAction = async (catId: number) => {
  const response = await deleteCat(catId);
  revalidateTag("cats");
  return response;
};

export const updateCatAction = async (catId: number, cat: Cat) => {
  const response = await updateCat(catId, cat);
  revalidateTag("cats");
  return response;
};

export const createCatAction = async (cat: Cat) => {
  const response = await createCat(cat);
  revalidateTag("cats");
  return response;
};
