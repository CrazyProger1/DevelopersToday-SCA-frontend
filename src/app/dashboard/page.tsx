import React from "react";
import { getCats } from "@/services/cats";
import { Cat, ModalParams, PaginationParams } from "@/types";
import { CatTable } from "@/components/tables";
import { AddCatModal, EditCatModal, DeleteCatModal } from "@/components/modals";

type Props = {
  searchParams: Promise<PaginationParams & ModalParams>;
};

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const response = await getCats(params);

  let cats: Cat[] = [];

  if (response.success) {
    cats = response.results;
  }

  return (
    <div>
      <CatTable cats={cats} />
      <AddCatModal visible={params.add !== undefined} />
      <EditCatModal visible={params.edit !== undefined} catId={params.edit} />
      <DeleteCatModal visible={params.delete !== undefined} catId={params.delete} />
    </div>
  );
};

export default Page;
