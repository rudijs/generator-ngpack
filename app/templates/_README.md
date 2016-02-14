# <%= viewName %>

## Overview

TODO: Add <%= viewName %> overview here.

## Development Workflow

1) Complile src ES6 code into ES5 and serve from memory with webpack-dev-server

- `npm start`

2) Complile src ES6 code into ES5 and serve files from build/ with browser-sync

- Continuous watch mode build
- `npm run webpack:watch`
- Single one time build
- `npm run webpack`
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

## Production Build

Compile into `dist/` bundle.js, index.html and assets

- `npm run build:prod`
- Test the production build serving files on localhost from dist/
- `npm run start:dist`

## NPM Build Scripts

To view all available build scripts

- `npm run`
