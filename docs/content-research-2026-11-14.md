# Content expansion and query evidence — 14 November 2026

## What the supplied exports contain

The user supplied two `searched_with_*_queries_US_20261107-*_20261114-*.csv` files. Each contains `query`, `search interest`, and `increase percent`. They contain the same seven records in different orders. Deduplicate by query; do not add the two lists or treat them as fourteen observations.

These are trend-style related-query exports, not Google Search Console performance exports. They have no site URL, clicks, impressions, CTR or position. The filename indicates US and 7–14 November; the files do not include full filter metadata. Interest values are the exported index, not search counts, traffic shares or keyword difficulty. `Breakout` is preserved as a label, not converted into a fabricated numeric percentage.

| Query (as exported) | Interest | Change | Content action |
|---|---:|---|---|
| horse of hoofprint bay | 100 | +7% | Keep the correct game name in titles; do not stuff the misspelling |
| horses of hoofprint bay mods | 72 | +250% | Expand the existing Mods hub; add home/sidebar entry points |
| steam | 27 | −30% | Retain the official store reference; no generic Steam page |
| horses of hoofprint bay discord | 13 | +100% | Add joining and invite-error guidance |
| westmore saddlery | 10 | Breakout | Add a creator-resource and installation guide with original links |
| horse games | 7 | −30% | No broad unrelated listicle added |
| horses of hoofprint bay release date | 4 | −80% | Keep the factual release page; shift expansion effort to post-purchase needs |

The exports support a change in the related-query mix. They do not prove that this site's traffic decline was caused by competitors, that overall game interest is falling, or that any competitor receives more organic traffic. Search Console data is still needed to separate impressions, position and CTR changes.

## Delivered content

- Expanded the five core guides: beginner, buying/selling, breeding, competitions and money.
- Rebuilt the Mods hub around original creator links, version-specific instructions and current achievement rules.
- Added five distinct pages: official Discord, Westmore Saddlery, maximum horses, staff assignments and competition-entry problems.
- Expanded the existing foal page with a pregnancy-to-adult table instead of creating another overlapping timeline page.
- Updated buildings, staff and jumping guidance with current patch implications and contextual links.
- Synchronized English and German content and maintained existing URLs.
- Added curated recommendations for all 47 guide routes, plus contextual links inside expanded articles.

## Evidence and certainty

| Claim or content | Evidence | Treatment |
|---|---|---|
| Buying UI, office folders, herd overview | Official Steam app 3727090 screenshots | Saved locally with original CDN URLs in `public/assets/credits.json`; captions identify promotional-build scope |
| Starter rebalance and Caprilli, 20 adults + 13 yearlings | [May developer announcement](https://steamcommunity.com/games/3727090/announcements/detail/653729380381491353) | Published figures, explicitly subject to version changes |
| Prestige, confidence, cross-country routes and Maria | [August developer announcement](https://steamcommunity.com/games/3727090/announcements/detail/714534951362494573) | Developer statements; no invented event threshold table |
| Pregnancy 8 days, foal stage 4 days, mod support | [Publisher FAQ](https://www.reddit.com/r/GamesWithHorses/comments/1xlu0dg/horses_of_hoofprint_bay_release_info_and/) | Publisher-confirmed; older achievement advice superseded by v1.0.5 |
| Money multipliers, building income, competition fix, achievement eligibility | [v1.0.3–v1.0.5 announcement](https://steamcommunity.com/games/3727090/announcements/detail/681892966116098106) | Current official changes; no inferred slider range or payback formula |
| Julia assignment slots, foal adulthood, horse flipping | Linked Steam discussions | Explicitly player reports, no claims of firsthand testing |
| Westmore downloads and Ascot install routine | [Creator profile](https://www.nexusmods.com/profile/WestmoreSaddlery?gameId=10086), [Ascot listing](https://www.nexusmods.com/horsesofhoofprintbay/mods/1) | Original links only; Demo folder distinguished from full game; packs not rehosted |
| Discord join blocks | [Publisher reply](https://www.reddit.com/r/HorsesOfHoofprintBay/comments/1xs2rme/does_anyone_have_a_working_discord_link/) | One documented cause, no universal fix or untested replacement invitation |

## Validation and remaining limits

Run `npm run build` and `npm run check`. Checks include internal targets, anchors, HTML metadata, JSON-LD, localized search, escaped structured blocks, accessible tables, screenshot provenance and curated recommendations.

Browser visual inspection was attempted but the Computer Use service could not establish the current Windows browser URL and stopped UI access. No completed desktop/mobile visual inspection is claimed. Real-game testing, Google indexing and ranking results are outside these checks.

For a later Search Console review, export queries and pages with clicks, impressions, CTR and position for two comparable periods. Prioritize existing landing pages with query relevance and declining impressions/CTR before creating another URL.
