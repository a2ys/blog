import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    author: reference("author"),
    draft: z.boolean().default(false),
    date: z.date().transform((val) => new Date(val)),
    category: z.array(z.string()).optional(),
    description: z.string(),
    featured: z.boolean().default(false),
  }),
});

const authorCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string(),
    email: z.string().email().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
