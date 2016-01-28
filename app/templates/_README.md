# <%= viewName %>

## Overview

TODO: Add site overview here.

## Development

1) Compile into `build/` bundle.js

- Continuous watch mode build
- `npm run webpack:watch`
- Single one time build
- `npm run webpack`

2) Run Browser Sync local server from the `build` directory

- `npm run serve`

3) Lint src files

- `npm run lint`
- `npm run lint:watch`

## Test

4) Unit test run in browser with code coverage reports in `test/coverage`

- `npm run karma`
- `npm run karma:single`

Unit test run headless for CI

- `npm run karma:ci`

## Production

Compile into `dist/` bundle.js, index.html and assets

- `npm run dist`
- `npm run serve:dist`

## Build Production

- npm run dist

## NPM Build Scripts

To view all available build scripts

- `npm run`
