# automation-plus-plus.com

The official frontpage of automation++: an endless supply of shrugs.

**Live site:** [automation-plus-plus.com](https://automation-plus-plus.com) ¯\\\_(ツ)\_/¯

## What is this

A single static page (`public/index.html`, no build step) that generates random
variations of the shrug kaomoji. Click the shrug to copy it. Press space for a
new one. That's it. That's the website.

## Deployment

Every push to `main` deploys to Cloudflare Pages via GitHub Actions
(`.github/workflows/deploy.yml`). The workflow is self-bootstrapping: it creates
the Pages project, attaches the custom domains, and upserts the DNS records if
they don't already exist.
