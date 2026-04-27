# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website hosted on GitHub Pages. No build system — changes are deployed by pushing directly to the `master` branch.

## Development

No build, install, or test commands exist. Open `index.html` directly in a browser to preview locally, or use a simple static server:

```bash
python3 -m http.server 8000
```

Deployment is automatic via GitHub Pages on every push to `master`.

## Architecture

The site is a single-page application contained almost entirely in `index.html`, with two supporting JS files:

- **`index.html`** — All HTML structure, inline `<style>` blocks, and the primary page content. CDN dependencies (Bootstrap 5, jQuery 3.4.1, Anime.js 2.0.2, Font Awesome 5 Pro) are loaded here.
- **`generic.js`** — Scroll-event binding (jQuery) that detects which section is in view and triggers section transitions. Also drives the Anime.js text animation on the hero section.
- **`particals.js`** — Canvas-based particle system. Contains two classes: `Particle` (simple physics circles) and `words_particles` (text labels that drift and decay). The arrays of skills, companies, and personal keywords rendered as floating particles are defined here. The animation loop uses `requestAnimationFrame`.
- **`css/new.css`** — Project grid and section layout styles.
- **`css/Style.css`** — Legacy/supplementary styles.

### Key data to update

When updating skills, companies, or personal tags displayed in the particle animation, edit the relevant arrays inside **`particals.js`** — not `index.html`.

Social links (LinkedIn, GitHub, email) and the email address shown in the popover are in **`index.html`**.
