import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().optional(),
        rank: z.number(),
        size: z.enum(["small", "medium", "large"]),
        tags: z.array(z.string()).optional(),
    }),
});

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { projects, posts };
