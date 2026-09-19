import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/**
 * Published posts, newest first.
 *
 * One definition, used by the index, the post pages and the feed. Three copies
 * of a draft filter is how a draft eventually ships: one of them gets the new
 * condition and the others do not.
 */
export function publishedPosts(all: Post[]): Post[] {
  return all
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 19 September 2026 — unambiguous for an audience that is not all en-US. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
