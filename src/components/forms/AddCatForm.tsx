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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Breed } from "@/types";
import { createCatAction } from "@/actions";
import { handleValidationAPIError, notify } from "@/helpers";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Cat's name must be at least 2 characters.",
  }),
  experience: z.number().gte(0, {
    message: "Cat's experience can't be negative.",
  }),
  breed: z.number().int().positive({
    message: "Please select a valid breed.",
  }),
  salary: z.number().gte(1, {
    message: "Cat's salary should be at least 1$!!!!😾",
  }),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  page: string;
  breeds: Breed[];
};

export const AddCatForm = ({ page, breeds }: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      experience: 0,
      breed: 1,
      salary: 0,
    },
  });
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const response = await createCatAction(data);
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Purr" {...field} />
              </FormControl>
              <FormDescription>Spy cat&#39;s name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="3"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    return field.onChange(value ? Number(value) : "");
                  }}
                />
              </FormControl>
              <FormDescription>Years of spy experience.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Breed</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value, 10))}
                  value={field.value?.toString()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a breed" />
                  </SelectTrigger>
                  <SelectContent>
                    {breeds.map((breed) => (
                      <SelectItem key={breed.id} value={breed.id.toString()}>
                        {breed.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Cat&#39;s breed.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
};
