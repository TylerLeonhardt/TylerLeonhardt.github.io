# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Tyler Leonhardt, served at https://tylerleonhardt.com by the Cloudflare Pages project `tylerleonhardt-github-io`. Its GitHub integration deploys this repository, with `master` as the production branch and preview deployments for PRs. The project has no build command configured. Recent production deployment records completed within a minute; this is an observation, not a timing guarantee.

GitHub Pages is also enabled from the root of `master`; recent pushes have triggered its separate "pages build and deployment" workflow. It has no custom domain (`cname: null` in the GitHub Pages API and no `CNAME` file) and serves `tylerleonhardt.github.io`, not the custom domain. `.nojekyll` disables Jekyll processing there. Whether to keep GitHub Pages enabled is the owner's decision; do not change repository settings as part of site edits.

No build tools, no JavaScript framework, no package manager — just hand-crafted HTML/CSS and static assets, with client-side JavaScript on the resume page.

## Development

Run a local dev server with Python 3:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080` (or `/resume/` for the resume). VS Code has an Edge Canary launch configuration for this URL. Its separate "Launch website" task still uses the legacy Python 2 command `python -m SimpleHTTPServer 8080`; use the Python 3 command above instead.

There are no build steps, no linting, and no tests.

### How to work on this site

Edit the files directly and review them locally; do not add tooling. Open a PR against `master`, wait for the "Cloudflare Pages" check to pass, and inspect the preview URL in its check summary. Merge the PR, then confirm the change in the HTML served at https://tylerleonhardt.com. For documentation-only changes, confirm the served `index.html` still matches `master` unchanged.

## Architecture

Static homepage with a separate resume page:

- **`index.html`** — The homepage. Contains a headshot, bio, and social links, with no JavaScript or Twitch redirect. The layout uses a card-based design with the headshot outside the card and bio content inside. Footer has three social icons (GitHub, Bluesky, LinkedIn). The bio links to VS Code, open-source work on GitHub, Seattle Comedy Theater (`https://www.seattlecomedytheater.com/`), Dollbrick, and coffee art on Instagram. Its "come see a show!" link points to `https://tylerleonhardt.live`, a separate improv show site, not a redirect handled here. The homepage does not link to the resume.
- **`css/styles.css`** — Main homepage styling (there are also inline styles in the HTML). Uses a custom font (Comic Neue via the root-level `ComicNeue-Light.ttf`), flexbox layout, card with box-shadow on a gray background (`#E0E0E0`), staggered CSS fade-in animations (including a `fade-in-up` variant with slide-up + fade), and hover color effects. The HTML loads external CSS via CDN: flexboxgrid 6.3.1 and Font Awesome 6.7.2.
  - `twitch` is a leftover class name: it only styles the three improv links in `index.html` (black, `#cc0000` on hover), not Twitch.
  - The homepage uses `fade-in one` for the wave, `fade-in-up four` for the headshot, `fade-in-up six` for the card, and `fade-in nine`, `ten`, `eleven` for GitHub, Bluesky, LinkedIn respectively. `.fade-in.twelve` remains in the CSS but is unused by the HTML; the `two`, `three`, `five`, `seven`, and `eight` delay classes are also unused.
- **`img/`** — Images and favicons. `img/favicon/manifest.json` is the web app manifest.
- **`resume/`** — `resume/index.html` fetches `resume.md` and renders it in the browser with marked 15 from jsDelivr. Edit `resume/resume.md` for resume content; the HTML contains its own responsive and print styles, loads Alegreya from Google Fonts, and links back to `/`. Use a local HTTP server rather than opening this page as a file so the Markdown fetch works.
- **`.well-known/microsoft-identity-association.json`** — Microsoft domain ownership verification.
