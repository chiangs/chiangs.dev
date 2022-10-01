# ⫻ chiangs.dev

- [⫻ chiangs.dev](#-chiangsdev)
  - [✅ TODO](#-todo)
  - [❓Introduction](#introduction)
    - [Supplemental links](#supplemental-links)
  - [👉 What's in this monorepo?](#-whats-in-this-monorepo)
  - [🤖 Conventions](#-conventions)
  - [⤴️ Monorepo GitFlow](#️-monorepo-gitflow)
  - [⌨️ Commands](#️-commands)

## ✅ TODO

- GitHub Actions 
- Changeset & Release (https://leerob.io/blog/turborepo-design-system-monorepo)
- Repo Status Badges
- Deploy to Vercel and takedown Netlify target
- Hookup Metronome to `Web` app

## ❓Introduction

This is a monorepo for [chiangs.dev](https://chiangs.dev). It is based off of my public monorepo example. The goal is to stretch and showcase my knowledge and capabilities in design and development.

[![@chiangs's Holopin board](https://holopin.io/api/user/board?user=chiangs)](https://holopin.io/@chiangs)

### Supplemental links

- Notion project board
- Storybook
- Figma Style Guide
- Framer Design System
- Framer Site version
- Qwik version

## 👉 What's in this monorepo?

`/apps/web` - Main app. Remix with Typescript targeted to Vercel deployment, imports components from `ui` package.

`/apps/storybook` - Component documentation. Storybook with Vite Builder, stories only, imports components from `ui` package.

`/apps/studio` - CMS Studio. Sanity Studio.

`/packages/eslint-config-custom` - Custom ES Lint configs for other packages and apps to use.

`/packages/tsconfig` - Custom TS Config rules for other packages and apps to use.

`/packages/ui` - React component package with Vite and Vitest.

## 🤖 Conventions

For `/apps` the name (except for web) will coincide with the sub-url if deployed.

## ⤴️ Monorepo GitFlow

```
Copy
[Web] - feat: add hat wobble
^---^ - ^---^ ^------------^
| | |
| | +-> Summary in present tense.
| |
| +-------> Type: chore, docs, feat, fix, refactor, style, or test.
|+-------> Package_name: Mono, Web, Admin, Mobile, Shared, Server
```

Packages you can use:

- Mono - main root changes
- Storybook
- Studio
- Web
- UI
- Config

Types you can use:

- chore: add config line, remove unused import
- docs: update README
- feat: add component
- refactor: fix broken loop / update service api
- test: ensure integration renders expected

## ⌨️ Commands