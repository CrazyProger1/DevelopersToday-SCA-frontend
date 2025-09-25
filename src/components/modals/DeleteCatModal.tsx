import React from "react";
import BaseModal from "./BaseModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  visible: boolean;
  catId?: number;
};

export const DeleteCatModal = ({ visible, catId }: Props) => {
  if (!visible) {
    return null;
  }
  return (
    <BaseModal
      query="delete"
      exitButtonHref="/dashboard"
      className="bg-background w-1/2 rounded-2xl p-4"
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center text-xl font-bold">Delete Agent</div>
        <div>Are you sure you want to delete an agent?</div>
        <div className="flex flex-row items-center gap-4">
          <Button variant="default" asChild>
            <Link href="/dashboard">Cancel</Link>
          </Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
    </BaseModal>
  );
};
