import BaseModal from "./BaseModal";
import { EditCatForm } from "@/components/forms";
import React from "react";
import { getCat } from "@/services/cats";

type Props = {
  page: string;
  visible: boolean;
  catId: number;
};

export const EditCatModal = async ({ page, visible, catId }: Props) => {
  if (!visible || !catId) {
    return null;
  }

  const response = await getCat(catId);

  if (!response.success) {
    return null;
  }

  return (
    <BaseModal query="edit" exitButtonHref={page} className="bg-background w-1/2 rounded-2xl p-8">
      <div className="text-center text-xl font-bold">Edit Agent</div>
      <EditCatForm page={page} cat={response} />
    </BaseModal>
  );
};
