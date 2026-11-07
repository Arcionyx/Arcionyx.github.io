# Ruixi Feng — personal portfolio

A responsive black-and-blue portfolio connecting Quant, IT, and Business Analytics. Includes an interactive three-perspective profile, five detailed case studies, five filterable experience entries, academic coursework, twelve learning records organized by theme, and a personal interests section. English and Chinese copy, a pausable mathematical wireframe, and a reading-progress indicator. Static HTML/CSS/JavaScript; no production dependencies, backend, API key, or database required.

## Preview

```bash
npm run build
npm run preview
```

Open http://localhost:3000. The `dist/` directory contains the complete deployable site. Fonts are optionally loaded from Google Fonts with system fallbacks.

## Edit

- `content.js`: shared bilingual copy, credentials, skills, and project/experience exports.
- `profile.js`: expanded bilingual narrative, case studies, journey entries, evidence, coursework, and personal interests.
- `styles.css`: colors, spacing, responsive layouts, and reduced-motion support.
- `upgrade.css`: perspective explorer, case-study layout, education, learning groups, and personal sections.
- `app.js`: filtering, project dialogs, language switching, and animation.
- `docs/content-sources.md`: what was read from LinkedIn and what was supplemented from the supplied resume.

## GitHub & deployment

Source repository: https://github.com/Arcionyx/Arcionyx.github.io

The included `.github/workflows/pages.yml` builds and deploys the site when GitHub Pages is enabled with **GitHub Actions** as the source. GitHub Pages availability for private repositories depends on the account plan; public repositories can use Pages on GitHub Free. Review visibility before changing it.

For the user-site repository `Arcionyx.github.io`, the expected URL after successful deployment is `https://arcionyx.github.io/`. This URL is not evidence that deployment has happened. A custom domain can be configured later.

All asset URLs are relative, so the site also works under a project-repository path. The source archive excludes the original resume and local preview configuration.

Live website: https://arcionyx.github.io/

## Editorial design references

- https://brittanychiang.com/ — clear relationships between experience, contributions, and tools.
- https://karpathy.ai/ — a chronological professional story and concrete work.
- https://www.joshwcomeau.com/ — substantive content with clear entry points into deeper exploration.
- https://bruno-simon.com/ — interaction as part of a personal identity; this site keeps its lightweight original wireframe rather than adopting a 3D game.

These are organizational references. No biography, testimonials, project outcomes, code, or assets were copied from them.
