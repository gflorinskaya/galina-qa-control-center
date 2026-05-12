# Galina QA Control Center

A playful but practical Senior QA/SDET portfolio app that presents resume data, testing judgment, automation mindset, and release-risk thinking as an interactive dashboard.

## Live App

Live app: https://gflorinskaya.github.io/galina-qa-control-center/

Source code: this repository

## Why this project exists

This is not just a static resume page. It is a small portfolio web app designed to show how I think about testing, communicate risk, structure technical information, and keep engineering work readable.

The app presents QA/SDET experience through interactive sections instead of a flat list of buzzwords. It shows how I connect UI behavior, API responses, data state, automation, CI/CD, deployment risk, and user impact. It also keeps the tone human, because clear technical work does not have to be dry.

The project itself is treated like software, not decoration: the content is data-driven, helper logic is tested, component behavior is covered, and GitHub Actions runs the quality checks.

## What the app includes

- **System Status**  
  A quick overview of QA/SDET strengths and working style.

- **Professional Profile**  
  Resume data presented as API-style responses, a skill tree, and a recruiter-readable summary.

- **Engineering Toolbox**  
  Practical tools and how they are used: API testing, automation, CI/CD, SQL, cloud, Kubernetes, performance testing, debugging, and test management.

- **Technical Case Studies**  
  Practical examples of senior QA/SDET work across load, regression, permissions, and cross-layer debugging.

- **Test Lab**  
  Sample bug report, test case, API test idea, regression risk analysis, and exploratory charter.

- **QA Arcade**  
  Interactive mini-games covering bugs, requirements, CI/CD, Kubernetes, PyTest, APIs, SQL, performance, permissions, and flaky tests.

- **Work Mode Simulator**  
  A playful translation layer for common workplace phrases like "quick check" or "only one button changed."

- **Automation Quality Gate**  
  Shows that the project itself has lint, tests, build validation, and CI.

- **Interview Mode**  
  Short answers to common recruiter and hiring-manager questions.

- **Known Issues**  
  A funny but professional section documenting harmless quirks like coffee dependency and edge-case detection.

- **QA Cat**  
  A subtle floating easter egg with short QA-themed comments. It stays small because the portfolio content is the main feature.

## Technical stack

- React
- Vite
- JavaScript
- Vitest
- React Testing Library
- ESLint
- GitHub Actions
- GitHub Pages deployment

## Quality checks

The project has a small quality gate:

```bash
npm run lint
npm run test
npm run build
```

CI runs these checks through GitHub Actions on pushes and pull requests to `main`.

## Running locally

Install dependencies:

```bash
npm install
```

Start the Vite dev server:

```bash
npm run dev
```

Run the full local quality gate:

```bash
npm run quality:gate
```

You can also run the checks individually:

```bash
npm run lint
npm run test
npm run build
```

## Test strategy

The tests are intentionally written to validate both functionality and portfolio content. They protect the parts of the app that matter for an employer-facing QA/SDET project:

- the app renders the core dashboard sections
- QA Arcade includes all major technical topics
- each mini-game has a scenario, investigation choices, result, why-it-matters explanation, and takeaway
- helper logic detects suspicious requirement language before it becomes release risk
- known issues include practical workarounds
- technical case studies stay privacy-conscious and useful
- private-looking data is not present in portfolio content
- the quality gate includes lint, tests, build validation, and CI

The tests are intentionally a little playful, but they are not random. They protect the core idea of the app: technical credibility, clear communication, safe portfolio content, and QA humor that still belongs in a professional setting.

## Deployment

The app is configured for GitHub Pages deployment.

Because this is a Vite app served from a repository subpath, `vite.config.js` uses:

```js
base: "/galina-qa-control-center/",
```

The repository Pages source should be set to **GitHub Actions** in GitHub repository settings. The deploy workflow builds the app, uploads the `dist/` folder as a Pages artifact, and publishes it through GitHub Pages.

## Notes on privacy

This project uses sample scenarios only. It does not include private employer data, organization names, internal URLs, Jira tickets, patient data, secrets, AWS account IDs, real cluster names, production data, or proprietary information.

The goal is to show QA/SDET thinking without exposing confidential work.

## CI pipeline

The workflow lives in `.github/workflows/ci.yml` and runs:

1. Checkout repository
2. Set up Node.js
3. Install dependencies with `npm ci`
4. Run ESLint
5. Run Vitest
6. Build the app

The deployment workflow lives in `.github/workflows/deploy.yml`. It runs the same lint, test, and build checks before publishing the `dist/` artifact to GitHub Pages.

## Future improvements

- Add a downloadable resume link
- Add more component-level tests
- Refine the QA Cat easter egg
- Add more technical case studies
- Add accessibility checks
