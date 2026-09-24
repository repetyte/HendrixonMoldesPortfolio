# Hendrixon Moldes Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The production files are generated in the `dist` folder.

## GitHub Pages deployment

This project is configured for GitHub Pages deployment.

### Automatic deployment via GitHub Actions

A workflow is included at `.github/workflows/deploy-pages.yml`.

It automatically runs when changes are pushed to the `main` branch.

To enable it in GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` → `Pages`.
3. Set the source to `GitHub Actions`.
4. Save.

### Manual deployment

If needed, you can also deploy manually:

```bash
npm run deploy
```

This uses `gh-pages` to publish the `dist` folder.

## Notes

- The site is designed to work correctly when served from a GitHub Pages project URL.
- If the site shows a 404, make sure GitHub Pages is enabled and the source is set to the correct deployment method.
