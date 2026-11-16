# Academic website — Gopal Sai Krishna Chamarthi

Static, seven-page academic website, ready for GitHub Pages. HTML/CSS/JavaScript only; no build step or external JS framework.

## Pages

- `index.html`: Home, research preview cards, and recent news
- `about.html`: Biography, education, experience
- `research.html`: Research themes, a clickable full poster, and two selected-slide carousels
- `publications.html`: Publications and DOI links
- `news.html`: News archive
- `academic.html`: Mentoring, teaching, awards
- `contact.html`: Email, Google Scholar, ORCID, LinkedIn

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` inside the extracted folder and visit http://localhost:8000/. Use a browser for previewing the slide carousels.

## Publish to GitHub Pages

1. Create a public GitHub repository named `<your-username>.github.io`.
2. Upload **the contents** of this ZIP (not the ZIP file or containing folder) into the repository root, including `index.html`, `assets/`, and `.nojekyll`.
3. Open repository **Settings > Pages > Build and deployment**.
4. Select **Deploy from a branch**, branch `main`, folder `/ (root)` and save.
5. Visit `https://<your-username>.github.io/` after publication. This also works in a project repository because links are relative.

## Changing the research slides

The carousel images are in `assets/images/research-slides/`:

**IRS-assisted communications:** `irs-01.webp` through `irs-04.webp` (four active slides):
- 01: `RS02.pdf`, page 1 — structured channel estimation and KPS-CE
- 02: `RS02.pdf`, page 2 — semi-blind detection at scale
- 03: `RS02.pdf`, page 3 — leverage-score sampled updates
- 04: `RS02.pdf`, page 4 — SER and measured runtime

The additional `irs-05.webp` through `irs-07.webp` files are older assets and are **not part of the current carousel**. They can be deleted if no longer needed.

**Randomized tensor algorithms:** `tensors-01.webp` through `tensors-07.webp`.
- 01: Synopsis p. 27 — Tucker decomposition
- 02: Synopsis p. 29 — RKVS-based Tucker update
- 03: Synopsis p. 31 — Tucker accuracy
- 04: Synopsis p. 45 — CP decomposition
- 05: Synopsis p. 47 — KRVS-based CP-ALS update
- 06: Synopsis p. 49 — CP image reconstruction
- 07: Synopsis p. 50 — CP accuracy

Carousel images are rendered directly from the supplied research slides; no plots are generated or altered. A slide opens in a new browser tab when clicked. Use the arrows or dots to change slides. To replace a slide, overwrite its `.webp` with an image of the same filename. To replace an entire carousel with a future poster, edit `research.html` and replace its `.research-slides` section with a poster-preview block modeled on direction 1.

**Direction 1 poster:** Full PDF: `assets/documents/Massive_MIMO_Research_Poster.pdf`. Preview: `assets/images/mimo-poster-preview.webp`.

Homepage cards: `assets/images/mimo-cover.webp`, `irs-cover.webp`, `tensor-cover.webp`.

## Update before public launch

- Replace `assets/images/profile-placeholder.svg` with an approved profile photo and update `index.html` to reference it. The photo is not included.
- Review submitted-manuscript status and affiliation as they evolve.
- Update `assets/documents/Gopal_CV.pdf` when needed.
- Existing Google Scholar, ORCID, LinkedIn and five DOI links were supplied by the site owner. A GitHub profile link is deliberately not shown.
- Update recent news in `index.html` and move older entries to `news.html`.

## Design / credits

This is independently written HTML/CSS/JS inspired by the layout of HTML5 UP Editorial; it is not the official HTML5 UP template source distribution. The design attribution is retained in the footer and `ATTRIBUTION.txt`.

No analytics, advertising, third-party scripts or backend are included. All content is static, relative paths are used, and navigation includes keyboard focus states and mobile support.

## Editing the formatted source

All seven HTML pages now use conventional indentation and line breaks, making it easier to locate, comment out, or move individual sections in a text editor (such as VS Code).

- Edit each page's content in its matching `.html` file.
- Edit design and colors in `assets/css/custom.css`.
- Edit responsive menu and carousel behavior in `assets/js/site.js`.
- For the IRS carousel, find `id="irs"` in `research.html`. For tensor slides, find `id="tensors"`.
- For the latest five news items, find `id="latest-news"` in `index.html`. The complete news listing is in `news.html`.

The visual presentation and site behavior are unchanged by this formatting-only revision.
