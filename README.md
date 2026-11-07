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
- `case-studies.js`: project problems, personal contributions and ownership boundaries, methods, reported deliverables, validation limits, and artifact publication status. Evidence links are currently withheld at the owner's request.
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

## Project evidence

Project scope figures are labeled separately from measured outcomes. The owner has not supplied quantitative validation results for publication. No model accuracy, financial return, or operational improvement percentage is inferred from record counts, listing counts, or the number of risk buckets.

Project attachments and evidence links are currently withheld. Files provided later for contribution review must not be added to the public deployment without the owner's release instruction. Published artifacts need a real HTTPS URL and a `published` status in `case-studies.js`. Do not mark data confidential or claim a reproduction package exists unless those facts have been established.

The natural-gas case covers the owner's confirmed Task 1–2 submissions, including storage-contract pricing. Credit-risk and FICO case details follow the inspected Task 3–4 submission text. Source review is separate from independent performance validation; raw submissions and datasets remain private.

The Disney case draws on two supplied written analyses and a 24-page presentation PDF. Its personal recommendation and trade-offs are displayed separately from the company data used as inputs. The source PPTX could not be transferred because it exceeded 32 MiB; it is not counted as an inspected artifact. Original attachments remain private.
