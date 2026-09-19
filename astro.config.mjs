import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://htphuc1994.github.io",
  build: {
    assets: "assets",
  },
  integrations: [
    sitemap({
      // Drafts never get a route (see src/pages/blog/[...slug].astro), so they
      // cannot reach the sitemap. This only drops the feed, which is not a page.
      filter: (page) => !page.endsWith("/rss.xml"),
    }),
  ],
});
