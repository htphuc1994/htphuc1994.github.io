---
title: "Post title goes here"
description: "One sentence. It becomes the meta description, the card text on the blog index, and the summary in the RSS feed."
pubDate: 2026-09-19
tags: ["example"]
draft: true
---

This file is a template, not a post. It is `draft: true`, so it does not appear
on the site, in the sitemap, or in the feed — the build filters drafts out. Copy
it, rename it, set `draft: false`, and delete this one.

The filename is the URL. `writing-a-fair-two-player-game.md` becomes
`/blog/writing-a-fair-two-player-game`.

## Headings become the structure

Markdown works as you would expect: **bold**, _italic_, [links](https://example.com),
lists, and fenced code blocks with a language for highlighting.

```ts
const paths = posts.map((post) => ({ params: { slug: post.id } }));
```

> Blockquotes are styled too.

### What to write about

You have thirty-odd shipped apps and almost nothing written about any of them.
The rejections are the interesting part: a paywall a reviewer could not find, an
ownership flag that unlocked a paid game when a bridge failed to load, a banner
that never came back after the first round. Those are real engineering stories
with a beginning and an end, and nobody else can write them.
