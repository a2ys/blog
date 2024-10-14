import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    // author: reference("author"),
    author: z.string(),
    draft: z.boolean().default(false),
    date: z.date().transform((val) => new Date(val)),
    category: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

const authorCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    bio: z.string(),
    talksAbout: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
