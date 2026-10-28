# Elora Behavioral Health Website — Handoff Guide

A static website: plain HTML, no build step. Hosting only needs these files:

- `index.html`
- `contact.html`
- `brand_assets/` (logo, hero artwork, headshot)

Everything else in this repo is documentation and tooling for making changes with Claude Code.

## What each file is for

| File | Purpose |
|---|---|
| `CLAUDE.md` | Rules Claude Code follows automatically in this project (workflow, design guardrails). |
| `PRODUCT.md` | Audience, positioning, and goals for the site. |
| `DESIGN.md` | The visual system: palette, fonts, cards, motion. Keeps new work consistent. |
| `.impeccable/design.json` | Machine-readable detail behind `DESIGN.md`. |
| `COPY.md` | Source text for the site copy. |
| `package.json`, `serve.mjs`, `screenshot.mjs` | Optional screenshot tooling (see below). |

## Setting up on a new computer

1. Install **Git**, **Node.js**, and **Claude Code**.
2. Clone the repo (downloads a copy and keeps the link to GitHub):
   ```
   git clone https://github.com/mikeidsolutions/elora-website.git
   cd elora-website
   ```
3. Optional, only for screenshot checks: `npm install`
4. Start Claude Code in that folder: `claude`
   `CLAUDE.md` loads automatically.

## Asking Claude for a change

Start each session with something like:

> Read PRODUCT.md and DESIGN.md first, then [describe the change].

When you're happy with the result, ask Claude to commit and push. Pushing to GitHub is what updates the repo (and the live site, if it is hosted from GitHub).

## Small changes vs. big changes

- **Small (text, links, copy):** Claude edits the HTML directly. Check it by opening `index.html` in a browser.
- **Larger design changes:** the screenshot tooling lets Claude see its own work.
  - `node serve.mjs` serves the site at `http://localhost:3000`.
  - `node screenshot.mjs http://localhost:3000` saves a PNG to `temporary screenshots/`, which Claude then reads and compares.
  - Requires `npm install` first (downloads Puppeteer and a copy of Chrome).

## Notes

- A new session does not remember past conversations. The docs above are the memory, so keep them up to date when design decisions change.
- Pages load Tailwind from a CDN, so they need an internet connection to render correctly when opened locally.
