import BaseModal from "./BaseModal";
import { EditCatForm } from "@/components/forms";
import React from "react";

type Props = {
  visible: boolean;
  catId: number;
};

export const EditCatModal = ({ visible, catId }: Props) => {
  if (!visible) {
    return null;
  }
  return (
    <BaseModal
      query="edit"
      exitButtonHref="/dashboard"
      className="bg-background w-1/2 rounded-2xl p-4"
    >
      <div>
        <div className="text-center text-xl font-bold">Edit Agent</div>
        <EditCatForm />
      </div>
    </BaseModal>
  );
};
