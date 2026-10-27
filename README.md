# Editorial personal portfolio

A complete React, Vite and TypeScript portfolio inspired by editorial magazine spreads: expressive Archivo Black headlines, Georgia italics, warm paper, deep green, original abstract artwork and asymmetrical project layouts. No invented credentials, projects or personal facts are included. No component library, tracking, external APIs or contact backend is required.

## Current status

Local project completed. No remote or deployment destination was supplied. GitHub connector authentication was confirmed, but no GitHub repository was selected or created and nothing was pushed or deployed. The preview is intentionally marked as placeholder content and excluded from search indexing. Replace the content before publishing as your real portfolio.

## Requirements and setup

Install Node.js 22 LTS (Node 20.19+ also works) and Git. In this project folder:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite, normally http://127.0.0.1:5173/. Stop it with Ctrl+C. `npm run preview` serves the production build after `npm run build`. Do not open index.html directly or use the preview server as production hosting.

## Folder structure

```text
portfolio/
  .github/workflows/deploy.yml   GitHub Pages build and deployment
  public/images/                Replaceable original SVG artwork
  public/favicon.svg            Replaceable favicon
  src/
    assets/                     Self-hosted font and OFL license
    components/                 Navigation, Hero, About, Projects,
                                Timeline, Skills, Recognition, Contact, Footer
    data/portfolio.ts           ALL personal content and typed data structures
    data/helpers.ts             Asset and configured-link helpers
    styles/global.css          Responsive styles and design tokens
    App.tsx                    Section composition and page metadata
    main.tsx                   React entry point
  scripts/content.test.mjs      Content and optional-section regression checks
  scripts/postbuild.mjs         Metadata generation and custom 404
  index.html                    Safe preview HTML metadata
  vite.config.ts                Relative or actual Pages base path
```

## Replace personal information

Edit `src/data/portfolio.ts`. Keep `preview: true` while editing. Replace `name`, `title`, `introduction` and the four About fields. `location` can remain empty. The named interfaces document each supported field. Content editing is file-based; there is no hidden CMS or admin account.

Set `portrait` to an image path relative to public, for example `images/portrait.webp`, and write accurate `portraitAlt` text. The current portrait is abstract artwork, not a photograph of you. Update the caption in Hero if you want a different published caption. Images may be SVG, WebP, JPG or PNG. Compress photographs and retain reasonable source sizes (roughly 1200–1600px wide for projects). Use images you have rights to display. Root-relative filenames are normalized by the asset helper to support repository subpaths; prefer `images/file.webp`. External image URLs are not supported by this helper: download appropriately licensed images into public first.

Set `email` to your real email; a valid value enables a working mailto link. Empty email renders a clear unavailable contact state. Add social links using `{ label: 'GitHub', url: 'https://github.com/YOUR_ACCOUNT' }` or LinkedIn and other professional destinations. Use real HTTPS URLs; empty/placeholder URLs never become clickable. No contact form pretends to send messages.

### Add, edit or remove projects

Replace the generated placeholder `projects` array with your own array of objects. A full example structure follows; every bracket is deliberately a placeholder:

```ts
projects: [{
  id: 'project-one',
  title: '[PROJECT TITLE]',
  description: '[SHORT DESCRIPTION]',
  problem: '[PROBLEM STATEMENT]',
  contribution: '[YOUR CONTRIBUTION]',
  technologies: ['[TECHNOLOGY]'],
  category: '[CATEGORY]',
  image: 'images/project-one.webp',
  imageAlt: '[DESCRIBE THE ACTUAL IMAGE]',
  repositoryUrl: '', // Real HTTPS URL, or leave blank
  liveUrl: '',       // Real HTTPS URL, or leave blank
  status: '[ACTUAL STATUS]',
  placeholder: false
}],
```

Add objects for more projects; delete objects to remove them; `projects: []` hides the section. Keep IDs unique. The first project is featured, with later projects arranged as alternating editorial spreads. The native project disclosure reveals the problem and contribution using keyboard-accessible controls. The artwork is only a layout placeholder, not a claimed demonstration. Add real screenshots and demo links when available.

### Optional sections

Experience, education, skills, achievements and certifications default to empty arrays and remain hidden. The Experience navigation link appears only with experience content. Populate only truthful entries:

```ts
experience: [{ institution: '[ORGANISATION]', title: '[ROLE]',
  start: '[START DATE]', end: '[END DATE]', description: '[DESCRIPTION]',
  achievements: [] }],
education: [{ institution: '[INSTITUTION]', title: '[QUALIFICATION]',
  start: '[START DATE]', end: '[END DATE]', description: '[DESCRIPTION]',
  achievements: [] }],
skills: [{ category: '[CATEGORY]', items: ['[SKILL]'] }],
achievements: [{ title: '[TITLE]', issuer: '[ISSUER]', date: '[DATE]', url: '' }],
certifications: [],
```

Do not use proficiency percentages or invent achievements. Leave unused collections empty.

### Publication mode and SEO

Replace every bracketed placeholder throughout the data file, delete placeholder projects you will not use, replace the portrait and project images, and set each real project's `placeholder` to false. Configure `seo.title`, `seo.description`, `seo.siteUrl` (absolute HTTPS live URL ending in `/`) and optionally `seo.image` (absolute HTTPS social image URL). Replace favicon.svg. Set `preview: false` only after editing. The build rejects any remaining bracketed placeholder in the data file. Placeholder projects are also hidden outside preview mode. This guard helps avoid accidentally presenting template content as real work; review your copy and assets manually too.

The build writes actual title, description, Open Graph metadata, optional canonical URL/social image, and robots directives into the generated HTML so social crawlers do not need JavaScript. Preview mode uses noindex,nofollow. Twitter large-image metadata is emitted with a configured social image. No fictitious Person schema is generated.

Design text such as the section titles is in components. Colors, spacing and fonts are CSS variables in `src/styles/global.css`. Archivo Black is bundled with its SIL Open Font License; Georgia and Arial use system font fallbacks. No font provider receives visitor requests.

## Test and build

```sh
npm test
npm run build
npm run preview
```

Build runs strict TypeScript checks, Vite bundling, placeholder safety validation, static SEO generation, and a standalone 404 page. Output is `dist/` (ignored in Git). Automated tests cover optional timeline rendering, required project fields, asset existence unique project IDs and valid configured contact destinations. Browser QA checks are documented in `VERIFICATION.md`; they are not an exhaustive accessibility certification.

## Publish to GitHub Pages

This folder is an initialized local repository on `main`. No remote exists. Supply the exact intended GitHub repository URL. Do not guess a username or overwrite an existing repository. If using an existing nonempty repository, first clone it separately and integrate these source files on a branch; preserve its history and unrelated files. The commands below assume a new empty destination repository and authenticated Git (GitHub connector authentication alone does not guarantee terminal Git authentication).

1. Create an empty GitHub repository in your chosen account. Do not initialize it with a README if pushing this local history.
2. In GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**. Ensure Actions is allowed in repository settings.
3. From this project folder, replace the URL below with your actual repository URL:

```sh
git remote add origin https://github.com/OWNER/REPOSITORY.git
git remote -v
git push -u origin main
```

If Git prompts for authentication, use your normal GitHub credential manager or SSH configuration. Never paste tokens into source files, URLs, README text or workflow files. If the remote already exists, inspect it before modifying anything. Never force-push to resolve a rejection.

The workflow checks out the code, installs Node 22 and locked dependencies, runs tests, reads the actual Pages configuration, builds, uploads `dist/`, and deploys using GitHub's supported Pages Actions. The exact base path comes from `actions/configure-pages` and is passed as `PAGES_BASE_PATH` to Vite, covering both account sites and `/repository/` sites. Local builds use relative URLs. This is a single-page anchor-navigation site, so no client router fallback is needed. The generated 404 links back to the actual base when built by Actions.

Find the verified live URL in **Settings → Pages** or in the successful **Deploy portfolio to GitHub Pages → deploy** job. A URL cannot be confirmed until that job succeeds. Typical URL shapes are `https://OWNER.github.io/REPOSITORY/` for a project or `https://OWNER.github.io/` for the specially named account-site repository. These are patterns, not this project's deployed URLs.

For future updates:

```sh
npm test
npm run build
git status
git add src public README.md scripts index.html vite.config.ts .github package.json package-lock.json tsconfig.json
git commit -m "Update portfolio content"
git push
```

Only stage files you intended to change. Pushes to main automatically run deployment; workflow_dispatch also permits manual runs.

## Troubleshooting

- **Actions deployment fails:** confirm Pages source is GitHub Actions, repository Actions are enabled, and the workflow has Pages write and ID-token permissions. Read the failing job log. A first setup may need a manual workflow run after enabling Pages.
- **Blank page/missing assets:** use the deployed URL's trailing slash; do not hardcode `/assets` or `/images` paths. The Pages job must pass the configure-pages base path. Rebuild after renaming images; filenames are case-sensitive on hosting.
- **Placeholder guard fails:** replace or remove every bracketed field, including SEO and optional example entries, before setting preview false. Keep preview true for design review.
- **No Experience/education/skills section:** empty arrays hide optional sections by design.
- **No email or project links:** configure real valid email/HTTPS values; placeholders are not active links.
- **Push rejected:** fetch and inspect the destination history; integrate through a branch/PR. Do not force-push or replace existing work.
- **404 on root:** ensure upload-pages-artifact points to dist and index.html is at its top level. The custom 404 is independent of the React app.
- **Port already used:** Vite prints a new port; use that URL or run `npm run dev -- --port 5174`.
- **Privacy changes:** update Footer's privacy notice if adding analytics, embeds, forms or other services. Hosting access logs are controlled by the host.

Official deployment references: [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Vite static deployment](https://vite.dev/guide/static-deploy).
