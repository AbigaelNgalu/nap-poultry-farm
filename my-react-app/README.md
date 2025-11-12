# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Package: nam-poultry-app

This repository workspace has been prepared to publish the `my-react-app` package to npm.



## Short package description (for npm)

nam-poultry-app is a lightweight React + Vite starter for showcasing poultry breeds. It includes example components for hero, features, product showcase, stats, testimonials, and a newsletter section. Suitable for use as a small app or as the basis for a UI component package.
### Install

After publishing, users can install the package with:

```bash
npm install @AbigaelNgalu/nam-poultry-app
```

Or with a scoped name (if you change it first):

```bash
npm install @your-username/nam-poultry-app
```

### Local development

Workspaces are enabled at repository root. To run locally:

```bash
# from repo root
npm install
cd my-react-app
npm run dev
```

### Publishing

To publish the package (you must be logged into npm locally):

```bash
cd my-react-app
npm login
npm publish --access public
```

If you'd like a scoped package name, tell me and I'll update `my-react-app/package.json` before committing/publishing.
