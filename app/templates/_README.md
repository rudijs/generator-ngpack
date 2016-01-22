# <%= viewName %>

## Overview

TODO: Add site overview here.

## Development

Run Browser Sync local server from the `build` directory

- `npm run serve`

Compile into `build/` bundle.js

- Single one time build
- `npm run webpack`
- Continuous watch mode build
- `npm run webpack:watch`

Lint src files

- `npm run lint`
- `npm run lint:watch`

## Production

Compile into `dist/` bundle.js, index.html and assets

- `npm run dist`
- `npm run serve:dist`

## Test

Unit test run in browser with code coverage reports in `test/coverage`

- `npm run karma`
- `npm run karma:single`

Unit test run headless for CI

- `npm run karma:ci`

## Build Production

- npm run dist

## NPM Build Scripts

To view all available build scripts

- `npm run`
