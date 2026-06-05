import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        date: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        status: z.enum(['seed', 'active', 'polished', 'archived']).optional(),
        type: z.enum(['research', 'engineering', 'internship', 'idea', 'essay', 'meta']).optional()
      })
    })
  })
};
