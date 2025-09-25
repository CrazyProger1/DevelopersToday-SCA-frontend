import React from "react";
import { Cat } from "@/types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

type Props = {
  cats: Cat[];
};

export const CatTable = ({ cats }: Props) => {
  return (
    <Table>
      <TableCaption>A list of spy agents 🐈</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Breed</TableHead>
          <TableHead>Experience (yr.)</TableHead>
          <TableHead>Salary ($)</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cats.map(({ id, name, breed, salary, experience }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{breed}</TableCell>
            <TableCell>{experience}</TableCell>
            <TableCell>{salary}</TableCell>
            <TableCell className="flex flex-row justify-center gap-4">
              <Button asChild variant="destructive">
                <Link href={`?delete=${id}`} className="flex flex-row items-center">
                  Delete <MdDelete />
                </Link>
              </Button>
              <Button asChild variant="default">
                <Link href={`?edit=${id}`} className="flex flex-row items-center">
                  Edit <MdEdit />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} />
          <TableCell className="flex flex-row justify-center">
            <Button asChild variant="default">
              <Link href={`?add=true`} className="flex flex-row items-center">
                Add <FaPlus />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
