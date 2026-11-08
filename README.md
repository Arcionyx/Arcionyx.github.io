# Ruixi Feng — personal portfolio

A responsive black-and-blue portfolio led by Business Analytics, followed by Quant and IT. The BA perspective opens by default; the Disney business-analysis case and business-related learning appear first. Two applied project cards and one Forage series entry preserve five detailed case studies. A dated natural-gas follow-up adds a synthetic-data storage demo and aggregate out-of-time validation. Includes five filterable experience entries, academic coursework, twelve learning records, and personal interests. English and Chinese copy, a pausable mathematical wireframe, and a reading-progress indicator. Static HTML/CSS/JavaScript; no production dependencies, backend, API key, or database required.

## Preview

```bash
npm run build
npm run preview
```

Open http://localhost:3000. The `dist/` directory contains the complete deployable site. Fonts are optionally loaded from Google Fonts with system fallbacks.

## Edit

- `content.js`: shared bilingual copy, credentials, skills, and project/experience exports.
- `profile.js`: expanded bilingual narrative, case studies, journey entries, evidence, coursework, and personal interests.
- `case-studies.js`: project problems, personal contributions and ownership boundaries, methods, reported deliverables, validation limits, and artifact publication status. Original attachments remain withheld; the new dated gas reproduction is public.
- `gas-lab.js`: bilingual synthetic-data chart, storage-contract controls, and validation presentation.
- `research/gas-reproduction/`: new AI-assisted reproduction, methodology, tests, and independent NumPy check. See its README for attribution and reproduction instructions.
- `assets/gas-validation.json`: aggregate validation output; contains no original price rows or individual predictions.
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

Project scope figures are labeled separately from measured outcomes. The original submissions do not contain supplied independent validation results. No model accuracy, financial return, or operational improvement percentage is inferred from record counts, listing counts, or the number of risk buckets.

Original project attachments and evidence links remain withheld. The owner requested a dated natural-gas follow-up on November 7, 2026; its newly authored AI-assisted code, synthetic demo, tests, and aggregate results are public. This does not release the original submissions or datasets. Files provided for contribution review must not be added to the public deployment without the owner's release instruction. Published artifacts need a real HTTPS URL and a `published` status in `case-studies.js`. Do not mark data confidential unless that has been established.

The natural-gas case covers the owner's confirmed Task 1–2 submissions, including storage-contract pricing. Credit-risk and FICO case details follow the inspected Task 3–4 submission text. Source review is separate from independent performance validation; raw submissions and datasets remain private.

The Disney case draws on two supplied written analyses and a 24-page presentation PDF. Its personal recommendation and trade-offs are displayed separately from the company data used as inputs. The source PPTX could not be transferred because it exceeded 32 MiB; it is not counted as an inspected artifact. Original attachments remain private.

## Gas follow-up validation

The new implementation uses a joint least-squares linear trend and annual sine/cosine terms, distinct from the original submitted implementation. It trains on the first 36 months and predicts the next 12 without refitting. MAE: 0.160421 versus 0.566667 for a lag-12 seasonal baseline; RMSE: 0.208369 versus 0.627163. Units follow the uploaded CSV. A separate expanding-window check covers 24 one-month forecasts. Eight error values were independently recomputed with NumPy. The demo chart and contract amounts use fully generated synthetic inputs only.

Run `node --test research/gas-reproduction/gas-model.test.mjs` for the 27 model and contract tests. GitHub Actions runs these before building. The results belong to this dated AI-assisted follow-up, not to the original submission; they establish neither live-market performance nor trading returns.
