import BaseModal from "./BaseModal";
import { AddCatForm } from "@/components/forms";
import React from "react";
import { getBreeds } from "@/services";
import { Breed } from "@/types";

type Props = {
  page: string;
  visible: boolean;
};

export const AddCatModal = async ({ page, visible }: Props) => {
  if (!visible) {
    return null;
  }

  const response = await getBreeds();

  let breeds: Breed[] = [];

  if (response.success) {
    breeds = response.results;
  }

  return (
    <BaseModal query="add" exitButtonHref={page} className="bg-background w-1/2 rounded-2xl p-8">
      <div>
        <div className="text-center text-xl font-bold">Add Agent</div>
        <AddCatForm page={page} breeds={breeds} />
      </div>
    </BaseModal>
  );
};
