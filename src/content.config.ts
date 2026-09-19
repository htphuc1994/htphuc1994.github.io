import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Posts live as Markdown in src/content/blog/. The filename becomes the URL, so
// name them the way you want them to read: `writing-a-fair-two-player-game.md`
// gives /blog/writing-a-fair-two-player-game.
//
// `draft: true` keeps a post out of the built site entirely — the index, the
// sitemap and the feed all filter on it. A draft that quietly publishes is worse
// than no draft support at all.
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    // The one-sentence summary. It is the <meta name="description">, the card
    // text on the index, and the <description> in the feed — so it is required
    // rather than optional. A post without one is a post nobody clicks.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
