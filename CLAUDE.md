# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VuePress blog site (Dazer007-Blog) built with the `vuepress-theme-vdoing` theme. It contains technical documentation and notes on frontend development (JavaScript, ES6, TypeScript, Vue, React), Java/Spring, and AI tools.

**Live deployments:**
- http://ityun.ltd/ (custom domain → GitHub Pages)
- https://dazer007.gitee.io/ (Gitee Pages)
- https://vuepress.ityun.ltd/ (Vercel)

## Commands

```bash
# Install dependencies
pnpm install

# Local development server
pnpm run dev

# Build for production (output: docs/.vuepress/dist)
pnpm run build

# Deploy to GitHub Pages (gh-pages branch)
pnpm run deploy

# Deploy to Gitee Pages
pnpm run deploy-gitee

# Batch edit markdown frontmatter (requires utils/config.yml setup)
npm run editFm
```

## Architecture

```
docs/
├── .vuepress/
│   ├── config.js           # Main VuePress config (imports modular configs)
│   ├── config/
│   │   ├── nav.js          # Navigation menu configuration
│   │   ├── themeConfig.js  # Vdoing theme settings (sidebar, footer, social)
│   │   ├── plugins.js      # Plugin configuration
│   │   └── head.js         # HTML head elements
│   ├── plugins/
│   │   └── love-me/        # Custom click heart animation plugin
│   └── styles/             # Custom CSS
├── index.md                # Homepage
├── @pages/                 # Special pages (archives, categories, tags)
├── 00.目录页/              # Directory/category pages
├── 01.前端/                # Frontend articles
├── 02.技术/                # Technical articles (Java, Maven, etc.)
├── 03.AI/                  # AI tools documentation
├── 04.关于/                # About page
└── 《*》笔记/              # Tutorial notes (ES6, TypeScript, Vue, etc.)
```

## VuePress Configuration

- **Theme:** `vuepress-theme-vdoing` (v1.12.8)
- **VuePress version:** v1.9.5 (VuePress 1.x)
- **Sidebar mode:** `structuring` (auto-generates from directory structure)
- **Markdown:** Line numbers enabled

### Adding New Content

1. Create `.md` files in appropriate directories under `docs/`
2. Include frontmatter for proper rendering:
```yaml
---
title: Page Title
date: 2024-01-01
categories:
  - CategoryName
tags:
  - tag1
  - tag2
---
```

3. For tutorial series, use numbered prefixes in filenames (e.g., `01.intro.md`) for correct ordering

### Navigation Updates

Edit `docs/.vuepress/config/nav.js` to add/modify navigation items.

### Theme Configuration

Edit `docs/.vuepress/config/themeConfig.js` for:
- Sidebar settings
- Footer content
- Social links
- Author information

## Utility Scripts

`utils/editFrontmatter.js` - Batch modify markdown frontmatter. Configure operations in `utils/config.yml` before running.