import BaseModal from "./BaseModal";
import { AddCatForm } from "@/components/forms";
import React from "react";

type Props = {
  page: string;
  visible: boolean;
};

export const AddCatModal = ({ page, visible }: Props) => {
  if (!visible) {
    return null;
  }
  return (
    <BaseModal query="add" exitButtonHref={page} className="bg-background w-1/2 rounded-2xl p-4">
      <div>
        <div className="text-center text-xl font-bold">Add Agent</div>
        <AddCatForm />
      </div>
    </BaseModal>
  );
};
