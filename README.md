# Cypress Automation Framework

A professional, scalable, and easy-to-use Cypress framework with TypeScript, Page Object Model, custom commands, and modern reporting. Designed for maintainable E2E testing and seamless CI/CD integration.

## Features

- TypeScript-first setup
- Page Object Model (POM)
- Custom Cypress commands
- Allure & Mochawesome reporting
- Video and screenshot capture
- ESLint & Prettier for code quality
- GitHub Actions CI/CD ready
- Modular, feature-based test organization

## Project Structure

```
cypress/
  e2e/         # Test specs
  pages/       # Page objects
  support/     # Custom commands, setup
  fixtures/    # Test data
  utils/       # Utilities
  results/     # Mochawesome report and videos (CI artifact)
  videos/      # Cypress videos
  screenshots/ # Cypress screenshots
cypress.config.ts  # Cypress config
tsconfig.json      # TypeScript config
package.json       # Scripts and dependencies
```

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests:
   ```sh
   npx cypress run
   ```

## Reporting

- **Mochawesome**: See `cypress/results/report.html` (videos in `cypress/results/videos/`)
- **Allure**: Generate with `npm run allure:generate` (open `allure-report/index.html`)

## Linting & Formatting

- Lint: `npm run lint`
- Check format: `npm run prettier:check`
- Fix format: `npm run prettier:fix`

## CI/CD

- CI runs tests, lints, checks formatting, and uploads Mochawesome and Allure reports as artifacts (with videos for Mochawesome).
- Download artifacts from the CI run summary.
