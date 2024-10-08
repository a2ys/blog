import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    date: z.date().transform((val) => new Date(val)),
    category: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
