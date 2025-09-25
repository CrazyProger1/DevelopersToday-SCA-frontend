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
  name: z.string().min(2, {
    message: "Cat's name must be at least 2 characters.",
  }),
  experience: z.number().gte(0, {
    message: "Cat's experience can't be negative.",
  }),
  breed: z.string().min(2, {
    message: "Cat's breed must be at least 2 characters.",
  }),
  salary: z.number().gte(0, {
    message: "Cat's salary can't be negative!!!!",
  }),
});

export const AddCatForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      experience: 0,
      breed: "",
      salary: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const cat: Cat = values;
    console.log(cat);
  }

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
                  onChange={(e) => field.onChange(Number(e.target.value))}
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
                <Input placeholder="Siamese" {...field} />
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
