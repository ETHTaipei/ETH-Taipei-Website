# Project Guidelines

## Institution Day Speaker Updates

- When adding or updating an Institution Day speaker, keep the Day 2 agenda, homepage speaker card, and headshot references in sync.
- Update the Institution Day roster in `public/constant/speakers2026.ts`, the relevant sessions in `DAY_2_AGENDA_ROWS` in `components/AgendaPage2026/index.tsx`, and any agenda name aliases in `AGENDA_SPEAKER_AVATARS`. Agenda headshots are derived from the homepage roster through `SPEAKER_AVATARS`; update the roster avatar instead of duplicating image paths or overriding them in individual sessions.
- Store website headshots in `public/images/speakers/`. Use the same current photo for the homepage and agenda, and optimize it before adding it to the website.
- Check all Day 2 appearances of the speaker. Preserve any explicitly requested shorter agenda introduction rather than automatically replacing it with the full homepage title.
- Keep names, job titles, organizations, and session titles separate. A moderator label is a session role, not a job title. Do not infer missing titles or organizations.
- When a named speaker has no company or organization, use `Independent` on both the homepage and agenda. Treat missing, empty, or whitespace-only values as absent. Preserve supplied organizations and do not apply this fallback to unnamed or pending speaker placeholders.
- Use localized names, job titles, and company names for the selected language. Keep a single speaker entry rather than creating separate entries for English and Traditional Chinese names.
- Before starting a batch of speaker updates, check the branch against the latest `origin/main`. Preserve local edits when synchronizing, retain already merged speaker corrections, and check for duplicate entries after resolving conflicts.

### Homepage Speaker Card Format

For Institution Day speakers in `/#speakers` (for example, `http://127.0.0.1:3000/#speakers`), use the same layout as Day 1:

```text
{name}
{title}
{company name}
```

- Put the name, job title, and company on separate lines, in that order. Use the existing Day 1 speaker styles and allow natural wrapping when space is limited.
- If no title is provided, omit the title line entirely. Do not add an empty row or a placeholder; show the company directly below the name.
- Apply this format to Institution Day speakers in both regular and featured cards in `components/HomePage/SpeakerSection.tsx`. Keep Day 1 formatting unchanged unless requested.
- If a localized job title is needed but the data model only supports `title`, add the corresponding localization support instead of embedding the title in the name.

Example without a title:

```text
Andrew Wu
Cathay Financial Holdings
```

Example with a title:

```text
Kai Jun Eer
Engineer
Category Labs
```

## Agenda Session Format

- Apply these formats to both Day 1 and Day 2 agendas, using the selected agenda content language.
- Keep the session title separate from speaker names and organizations. Do not include the session title in a speaker line.
- Keep speaker names in the same text style and color, including the moderator's name. Render organizations in the existing muted organization style.
- Put the organization immediately after the speaker name in parentheses: `Name（Organization）` in Traditional Chinese and `Name (Organization)` in English. Use `Independent` when a named speaker has no organization.
- Preserve explicitly requested session-specific introductions, such as a job title or a shorter organization name; otherwise use the compact name-and-organization format below.

### Panel

- Show the session title above the participant list.
- Put the moderator first, followed by one participant per line. Preserve the requested participant order.
- Prefix the moderator's line with `主持人 ` in Traditional Chinese or `Moderator ` in English. Use a single space after the role label, without a colon or vertical bar. Treat the moderator label as a session role, not part of the name or job title.

Traditional Chinese participant-list example:

```text
主持人 Martinet（Quantstamp）
Ko-Wei（IOTA）
Benji（LINE）
Teagan（Canton）
```

### Talk

- Show the talk title first, followed by the speaker's name and organization on a separate line.
- Do not add a moderator prefix to the speaker of a talk.

Traditional Chinese example:

```text
ETHSystem 介紹
Oskar（ETHSystem）
```

## Website Image Optimization

- Both Day 1 and Day 2 agenda headshots must use `speakers2026ByDay` in `public/constant/speakers2026.ts` as their source of truth. Keep only agenda name aliases in the agenda mapping, not separate image paths.
- Apply the same headshot rules to all Day 1 (Crypto Native Day) and Day 2 (Institution Day) speakers, including regular and featured cards in `/#speakers` and their corresponding agenda appearances. These rules cover existing headshots as well as new or replacement photos.
- Before adding or uploading an image, check its file size, pixel dimensions, and intended display size. Optimize oversized images before using them on the website.
- For speaker headshots, target a maximum long edge of 800 px and a file size of 200 KB or less, adjusting as needed to preserve clarity. Do not upscale low-resolution originals.
- Every new or replacement speaker headshot must be checked and optimized before it is added to the website. Resize and compress oversized files; reuse an existing optimized image when it already meets the display requirements.
- For tall portraits whose face is clipped by the avatar frame, crop around the face before resizing and compressing. Keep the full face and enough space around the head visible within the circular mask; do not rely on a centered crop when the face is off-center.
- Create a separate website crop from the original, preferably square for the current circular avatars. Preserve proportions when resizing, avoid stretching or upscaling, and inspect the crop against both homepage and agenda avatar framing without automatically starting browser validation.
- Use the same optimized headshot asset for the homepage speaker card and every corresponding agenda appearance. Preserve the original source separately and record the before-and-after file sizes when reporting an optimization.
- Check `next.config.js` before relying on framework image optimization. With the current `images.unoptimized: true` setting, `next/image` does not compress the delivered image; optimize the asset itself rather than relying on its `quality` or `sizes` props.
- Prefer compressed JPEG or WebP for photos. Preserve transparency where needed and retain official SVG assets as vectors when possible. When changing formats, update references and convert the file rather than only changing its extension.
- Preserve original assets and use optimized copies on the website. Maintain the original aspect ratio, correct orientation, and brand colors, and avoid unnecessary cropping.
- After optimization, confirm that the image decodes correctly, its dimensions suit its use, and its file size and clarity are acceptable compared with the original.

## Sponsor Logo Design

- Before adding a transparent sponsor logo, determine whether the artwork is dark or light and check its contrast against the card background.
- For dark logos or transparent logos with insufficient contrast on a dark background, follow Sigmarket's `surface: "light"` pattern and use a light card.
- Do not invert logos, apply filters, or alter official brand colors to match the background.
- Prefer official SVG or high-resolution transparent assets. Preserve the original aspect ratio and sufficient padding, without stretching or cropping.
- After adding or replacing a sponsor logo, check clarity, contrast, consistent sizing, hover states, and keyboard focus states.

## HTML and Website Validation

- For a standalone HTML file that is not a website or deployment task, desktop display and basic functionality checks are sufficient by default.
- Do not add mobile or responsive validation for a standalone HTML file unless explicitly requested.
- For websites, web apps, pages intended for deployment, or requirements that explicitly include mobile or responsive support, validate desktop and mobile display and interactions as required by the task.
