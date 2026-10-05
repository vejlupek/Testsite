import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      lang: z.string().default('cs'),
      translationSlug: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Service-specific CTA replacing the generic one at the end of the article */
      cta: z.object({
        title: z.string(),
        text: z.string(),
        href: z.string(),
        btn: z.string(),
      }).optional(),
    }),
});

export const collections = { blog };
