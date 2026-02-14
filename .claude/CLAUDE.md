# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Tyler Leonhardt, deployed to GitHub Pages at https://tylerleonhardt.com. No build tools, no JavaScript framework, no package manager — just hand-crafted HTML/CSS served as-is (`.nojekyll` disables Jekyll processing).

## Development

Run a local dev server with Python:

```sh
python -m SimpleHTTPServer 8080
```

Then open `http://localhost:8080`. VS Code is also configured with a launch task for Edge Canary debugging.

There are no build steps, no linting, and no tests.

## Architecture

Single-page static site:

- **`index.html`** — The entire site. Contains a JS redirect from `tylerleonhardt.live` to Twitch, a headshot, bio, and social links. The layout uses a card-based design with the headshot outside the card and bio content inside. Footer has social icons (GitHub, Bluesky, Twitter, LinkedIn).
- **`css/styles.css`** — All styling. Uses a custom font (Comic Neue via local TTF), flexbox layout, card with box-shadow on a gray background (`#E0E0E0`), staggered CSS fade-in animations (including a `fade-in-up` variant with slide-up + fade), and hover color effects. External CSS loaded via CDN: flexboxgrid and Font Awesome 6.7.2.
- **`img/`** — Images and favicons. `img/favicon/manifest.json` is the web app manifest.
- **`.well-known/microsoft-identity-association.json`** — Microsoft domain ownership verification.
