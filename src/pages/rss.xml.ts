import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { publishedPosts } from "../utils/posts";
import { profile } from "../data/cv";

export async function GET(context: APIContext) {
  const posts = publishedPosts(await getCollection("blog"));
  return rss({
    title: `${profile.shortName} — Writing`,
    description: "Notes on building and shipping software.",
    // context.site comes from `site` in astro.config.mjs. If that is ever
    // removed the feed silently emits relative links, which no reader follows.
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
