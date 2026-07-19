import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const poradnik = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poradnik' }),
  schema: z.object({
    lang: z.enum(['pl', 'en']),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = { poradnik };
