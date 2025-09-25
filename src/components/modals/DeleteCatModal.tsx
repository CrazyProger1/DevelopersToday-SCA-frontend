import React from "react";
import BaseModal from "./BaseModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DeleteCatForm } from "@/components/forms";
import { getCat } from "@/services/cats";

type Props = {
  page: string;
  visible: boolean;
  catId?: number;
};

export const DeleteCatModal = async ({ page, visible, catId }: Props) => {
  if (!visible || !catId) {
    return null;
  }

  const response = await getCat(catId);

  if (!response.success) {
    return null;
  }

  return (
    <BaseModal query="delete" exitButtonHref={page} className="bg-background w-1/2 rounded-2xl p-8">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center text-xl font-bold">Delete Agent</div>
        <div>Are you sure you want to delete an agent?</div>
        <div className="flex flex-row items-center gap-4">
          <Button variant="default" asChild>
            <Link href="/dashboard">Cancel</Link>
          </Button>
          <DeleteCatForm page={page} cat={response} />
        </div>
      </div>
    </BaseModal>
  );
};
