# Adverts on this site — the decision, and the bar

**Status: no adverts, deliberately.** This file records why, and what would have
to be true before that changes.

## The decision (19 September 2026)

Asked to put Google ads on the site. Two facts made "not yet" the answer.

**1. It would be AdSense, not AdMob.** AdMob is for apps. A website uses AdSense,
which is a different product with an approval step the apps never had.

**2. AdSense and AdMob are the same publisher account.** `public/app-ads.txt`
carries `pub-4359578322512482` — the ID that monetises Math Duel and Ashta Chamma.
Google is explicit that an account closed for policy reasons on one side ends
monetisation on the other. So an AdSense problem here reaches the apps' income.

Against that: a personal CV page earns approximately nothing. The risk is
asymmetric in the wrong direction, and the decision was to wait until the site is
worth monetising on its own terms.

## Where the site actually stood

Measured, not estimated:

- **One route.** `/` — a single page.
- **~250 words of original prose** in total, and ~30 of those restate another 80.
- The rest of the rendered ~1,070 words are **lists**: tech names, certificate
  titles, bibliographic citations, app names. Reviewers discount these.
- **29 apps listed with no description of any of them.**
- No privacy policy, no `ads.txt`, no sitemap, no feed.

A one-page résumé is the archetypal "low value content" rejection. Applying in
that state risks a decline on the account that pays for the apps, to gain nothing.

## What changed today

The machinery a blog needs, so writing is the only remaining input:

- `src/content.config.ts` — a `blog` collection with a typed schema.
  `draft: true` keeps a post out of the site, the sitemap **and** the feed.
- `/blog` index, `/blog/[slug]` posts, `/rss.xml`, `sitemap-index.xml`,
  `robots.txt` — so posts can be found.
- `/privacy` — needed today regardless of ads, because the site loads Google
  Fonts and stores a theme preference. It states plainly that there are no
  adverts, and commits to saying so *before* any appear.
- Nav links made root-relative. They were bare `#fragments`, which resolve
  against the current page — from `/blog/a-post` they pointed at anchors that do
  not exist there.

## The bar, before applying

Google publishes no word count. What it says is "high-quality, original" content
that "attracts an audience". In practice, for a site like this:

1. **Real articles, not CV sections.** Perhaps 15–20 posts, each a few hundred
   words of genuine prose. The site's current ~250 words total is not close.
2. **Written over months, not a weekend.** A site that gains twenty posts in two
   days and then stops reads as built-for-AdSense.
3. **Some traffic that is not you.** Ads on a page nobody reads earn nothing
   anyway, and low-traffic sites are where invalid-activity flags happen.
4. **A privacy policy naming the ad provider and cookie use.** The current one
   says there are no ads — it must be rewritten *before* the first ad loads, not
   after.
5. **`ads.txt` at the domain root** — a different file from `app-ads.txt`, which
   is for the apps. Both would sit in `public/`. **Do not touch `app-ads.txt`
   while adding one**; it authorises the apps' inventory.
6. **A consent mechanism for EEA/UK visitors** — Google requires a certified CMP
   for personalised ads. The apps use Google's UMP; the web equivalent would need
   setting up here.

## What to write about

The 29 apps are 29 products with nothing written about any of them, and the
interesting material is the failures: a paywall a reviewer could not find, an
ownership flag that unlocked a paid game whenever a bridge failed to load, a
banner that never came back after the first round, a pawn sliced flat because an
SVG viewBox had no headroom. Those are real engineering stories with a beginning
and an end, and nobody else can write them.

That is also, not coincidentally, exactly the content AdSense is looking for.
