# <%= viewName %>

## Overview

TODO: Add <%= viewName %> overview here.

## Development Workflow

The Frontend development workflow is in three stages.

Stage 1)

Source files are in the src/ directory and written in ES6 Javascript.

Stage 2)

Source files are transpiled with Babel and the AngularJS code is annoteted into the build/ directory.

There are two methods to view the web application served from the build/ directory:

a) *webpack-dev-server* will compile the src/ files and  **serve them from memory** on localhost:8080

b) *webpakc* with compile the src/ files into the build/ directory and **serve them from disk** using *browser-sync* on localhost:3000

Stage 3)

Source files are transpiled, annotated and minified in to the dist/ dicrectory.

The dist/ directory build is what will be used in production.

You can test the production build by serving files from the dist/ directory with *node-server* wth `npm run start:dist`

*Note*: Static assests like index.html, favicon.ico etc are copied into build/ and dist/ using the CopyWebpackPlugin in webpack.config.js

## NPM Scripts

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
