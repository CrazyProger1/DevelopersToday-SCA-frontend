import React from "react";
import { getCats } from "@/services/cats";
import { Cat, ModalParams, PaginationParams } from "@/types";
import { CatTable } from "@/components/tables";
import { AddCatModal, EditCatModal, DeleteCatModal } from "@/components/modals";
import { PAGES } from "@/config";

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
      <AddCatModal page={PAGES.dashboard} visible={params.add !== undefined} />
      <EditCatModal
        page={PAGES.dashboard}
        visible={params.edit !== undefined}
        catId={params.edit}
      />
      <DeleteCatModal
        page={PAGES.dashboard}
        visible={params.delete !== undefined}
        catId={params.delete}
      />
    </div>
  );
};

export default Page;
