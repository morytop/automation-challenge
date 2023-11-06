# QA Automation Challenge

This repo is end-to-end test automation project for SAP Fioneer site using `Typescript` and `Playwright` [https://playwright.dev/](https://playwright.dev/).

Tests:

- Verify if all bookmarks are visible
- Verify if a user has been redirected to the financial control page
- Verify validation messages on contact page

## Required

This project uses `Node.js` so I recommend install the latest LTS version v18.12.0

## Build project

1. Download repository
2. Run command `npm install` to install dependencies
3. Run command `npx playwright install` to download actual browsers

## Scripts

Scripts are defined in `package.json` in section scripts and can be run by `npm run`

To run all tests on all browsers (Chromium, FireFox, Webkit) in headless mode:

`npm run test`

To run all tests in headed mode:

`npm run tests:browser`

To run all tests in UI mode:

`npm run tests:ui`

To run tests on Chromium in headless mode:

`npm run tests:ch`

To debug tests:

`npm run tests:debug`

To show report:

`npm run tests:report`
