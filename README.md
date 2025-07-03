# Playwright Task

This task contains end-to-end test for the [Veeam website](https://www.veeam.com/) using [Playwright](https://playwright.dev/).

## Installation

First of all I had to install [Playwright](https://playwright.dev/docs/intro) and [VSCode](https://code.visualstudio.com/download).
As Playwright requires NodeJS 14+, check if you have already installed NodeJS with command:

```bash
node -v
```

If you don't have Node.js at all, or you don't have right version, you can download it from [Node.js](https://nodejs.org/en/download).

## Download task

Download or clone task from [github](https://github.com/sdimun/playwrightAT).


## Run tests

Navigate to file location when you saved task via terminal. 

### Headless mode
You can simply run all tests in headless mode with command:

```bash
npx playwright test
```

### Headed mode

```bash
npx playwright test --headed
```

