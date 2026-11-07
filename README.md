# Ruixi Feng — personal portfolio

A responsive black-and-blue portfolio connecting Quant, IT, and Business Analytics. English and Chinese copy, an animated mathematical wireframe, project filters and detail dialogs, an experience timeline, and credentials. Static HTML/CSS/JavaScript; no dependencies, backend, API key, or database required.

## Preview

```bash
npm run build
npm run preview
```

Open http://localhost:3000. The `dist/` directory contains the complete deployable site. Fonts are optionally loaded from Google Fonts with system fallbacks.

## Edit

- `content.js`: bilingual copy, projects, experience, credentials, and skills.
- `styles.css`: colors, spacing, responsive layouts, and reduced-motion support.
- `app.js`: filtering, project dialogs, language switching, and animation.
- `docs/content-sources.md`: what was read from LinkedIn and what was supplemented from the supplied resume.

## Connect GitHub

The initial workspace was authenticated as **Arcionyx**, but `gh repo create` returned `Resource not accessible by integration (createRepository)`. No remote repository has been created or modified.

Create an empty repository at https://github.com/new named `Arcionyx.github.io` (without initializing a README). Start private if you want to review the source first. Share the repository URL with the assistant so it can commit and push this prepared source through the connected GitHub account.

The included `.github/workflows/pages.yml` builds and deploys the site when GitHub Pages is enabled with **GitHub Actions** as the source. GitHub Pages availability for private repositories depends on the account plan; public repositories can use Pages on GitHub Free. Review visibility before changing it.

For the user-site repository `Arcionyx.github.io`, the expected URL after successful deployment is `https://arcionyx.github.io/`. This URL is not evidence that deployment has happened. A custom domain can be configured later.

All asset URLs are relative, so the site also works under a project-repository path. The source archive excludes the original resume and local preview configuration.
