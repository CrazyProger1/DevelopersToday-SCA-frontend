"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { deleteCatAction } from "@/actions";
import { notify } from "@/helpers";
import { useRouter } from "next/navigation";
import { Cat } from "@/types";

type Props = {
  page: string;
  cat: Cat;
};

export const DeleteCatForm = ({ page, cat }: Props) => {
  const router = useRouter();
  const onSubmit = async () => {
    const { success } = await deleteCatAction(cat.id);
    if (success) {
      notify("Agent removed", "success");
    } else {
      notify("Agent not found!", "error");
    }
    router.push(page, { scroll: false });
  };
  return (
    <form onSubmit={onSubmit}>
      <Button type="submit" variant="destructive">
        Delete
      </Button>
    </form>
  );
};
