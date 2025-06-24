import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin';

// Cypress configuration following industry best practices
export default defineConfig({
  video: true, // Enable video recording for all test runs
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', // Set your application base URL
    supportFile: 'cypress/support/e2e.ts', // Global support file
    specPattern: 'cypress/e2e/**/*.spec.ts', // Test spec pattern
    setupNodeEvents(on, config) {
      // Integrate Allure reporting
      allureWriter(on, config);
      cypressMochawesomeReporter(on);
      return config;
    },
    env: {
      allure: true, // Enable Allure reporting
    },
    // Add more config options as needed for your project
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true, // Overwrite to ensure a single report per run
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'Cypress Mochawesome Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: 'report', // Always use the same filename
  },
});
