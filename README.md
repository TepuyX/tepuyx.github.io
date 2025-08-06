# TepuyX - Software Consulting Landing Page

A minimalistic, modern landing page for TepuyX software consulting agency built with Gatsby and TypeScript.

## Features

- 🎨 Minimalistic and clean design
- 🚀 Built with Gatsby for optimal performance
- ⚡ Animated particle system hero section
- 📱 Fully responsive design
- 🎯 SEO optimized
- 💫 Smooth animations and interactions

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run develop

# Build for production
pnpm run build

# Serve production build
pnpm run serve
```

## Deployment

### Automated Deployment (Recommended)

This site is configured for automated deployment to GitHub Pages via GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://tepuyx.com` (configured via CNAME)

### Manual Deployment

For manual deployment, you can use the built-in deploy script:

```bash
# Build and deploy to GitHub Pages
pnpm run deploy
```

This will:
1. Build the site with `gatsby build`
2. Deploy the `public/` directory to the `gh-pages` branch using `gh-pages`

### Configuration

- **Custom Domain**: Configured via `CNAME` file pointing to `tepuyx.com`
- **GitHub Actions**: Automated build and deployment workflow
- **Build Output**: Static files generated in `public/` directory