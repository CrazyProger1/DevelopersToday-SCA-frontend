"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Cat } from "@/types";

const formSchema = z.object({
  salary: z.number().gte(0, {
    message: "Cat's salary can't be negative!!!!",
  }),
});

type Props = {
  page: string;
  cat: Cat;
};

export const EditCatForm = ({ page, cat }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salary: cat.salary,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5000"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>Monthly salary ($).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col items-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};
