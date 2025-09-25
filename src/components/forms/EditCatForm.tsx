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
import { updateCatAction } from "@/actions";
import { handleValidationAPIError, notify } from "@/helpers";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  salary: z.number().gte(1, {
    message: "Cat's salary should be at least 1$!!!!😾",
  }),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  page: string;
  cat: Cat & { id: number };
};

export const EditCatForm = ({ page, cat }: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salary: Number(cat.salary),
    },
  });
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const response = await updateCatAction(cat.id, { ...cat, salary: data.salary });

    if (response.success) {
      notify("Agent saved!", "success");
      router.push(page, { scroll: false });
      return;
    } else {
      const handled = handleValidationAPIError(form, response);

      if (!handled) {
        notify("Failed to update agent! Please try again later.", "error");
        router.push(page, { scroll: false });
      }
    }
  };

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
                  onChange={(e) => {
                    const value = e.target.value;
                    return field.onChange(value ? Number(value) : "");
                  }}
                />
              </FormControl>
              <FormDescription>Monthly salary ($).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col items-center">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
};
