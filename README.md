# Pioneer Indians Cultural Collective Web App

This repository now houses a full Angular application for the Pioneer Indians Cultural Collective. The app reimagines the earlier static prototype as a routed experience with English and German language support, polished layouts, and animated logo transitions on every page change.

## Prerequisites

* [Node.js](https://nodejs.org/) 18 or later
* [npm](https://www.npmjs.com/) (bundled with Node.js)

> The Angular CLI dependency is defined in `package.json`, so you do **not** need a global installation.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Navigate to `http://localhost:4200/` in your browser. The app supports hot reloads, so changes are reflected automatically.

### Production build

Create an optimized production bundle with:
```bash
npm run build
```
The compiled output is placed in `dist/pioneer-indians/`.

### Linting & tests

Unit tests use Karma and Jasmine. Run them with:
```bash
npm test
```

## Application structure

```
.
├── angular.json            # Angular workspace configuration
├── package.json            # Scripts and dependencies
├── src/
│   ├── main.ts             # App bootstrap entrypoint
│   ├── index.html          # HTML shell rendered by Angular
│   ├── styles.scss         # Global styling tokens and helpers
│   ├── assets/             # Logos and decorative SVG patterns
│   └── app/
│       ├── core/           # Shared services (language service)
│       ├── pages/          # Routed feature components
│       ├── app.component.* # Shell layout with logo animation & nav
│       └── app.module.ts   # Root Angular module
└── tsconfig*.json          # TypeScript compiler configs
```

## Key features

* **Smooth logo animation** triggered automatically during route transitions between the Home, Events, Programs, and Community pages.
* **Bilingual experience** with an accessible language toggle that swaps between the English and German logo variants and localized copy across every view.
* **Responsive layout** leveraging reusable card grids, decorative patterns, and modern typographic scales inspired by the original design brief.

## Troubleshooting

* If you encounter installation issues, delete `node_modules` and rerun `npm install` to ensure dependencies are resolved cleanly.
* Make sure port `4200` is available before running `npm start`, or configure an alternate port via `ng serve --port <number>`.

## License

This project is distributed for demonstration purposes and does not include a specific license.
