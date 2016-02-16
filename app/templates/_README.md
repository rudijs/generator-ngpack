# <%= viewName %>

## Overview

TODO: Add <%= viewName %> overview here.

## Development Workflow

## Test

1) Start the unit test runner with code coverage reports in `test/coverage`

- Browser test runner (watch for and run tests on src/ file changes).
- `npm run karma`
- Browser test runner - single run
- `npm run karma:single`
- Headless test runner (PhantomJS) for CI or local developer use.
- `npm run karma:ci`

2) Test coverage reports

- Open the unit test coverage reports in a browser with livereload when tests run
- `npm run karma:cov`

3) Javascript code linting

- Watch src javascript source files and run eslint on each file change.
- `npm run lint:watch`
- Single run of eslint on src/
- `npm run lint`

## Local Development Server

Option 1:

4a) Complile src ES6 code into ES5 and **serve from memory** with *webpack-dev-server* on port 8080

- `npm start`
- Open a browser at [localhost:8080](http://localhost:8080)

Option 2:

4b) Complile src ES6 code into ES5 and **serve files from build/** with *browser-sync* on port 3000

- Compile static assets and bundles into *build/*
- `npm run build:watch`
- or single one time build
- `npm run build:watch`
- Run local developer server on port 3000 with livereload watching build/ for file changes:
- `npm run start:dev`
- Open a browser at [localhost:3000](http://localhost:3000)

## Production Build

TODO npm shrinkwrap

Compile static assests into `dist/` (bundle.js, images etc)

Copy index.html into `httpd/` for production web server

- `npm run build:prod`
- Test the production build serving files on localhost from dist/
- `npm run start:prod`
- Open a browser at [localhost:3000](http://localhost:3000)

CDN Deliver static assets for builds on production (non-local) servers.

- `npm run build:prod:cdn`

Docker

- `./docker-build.sh 1.0.1`
- `sudo TAG=1.0.1 docker-compose up -d`
- `sudo TAG=1.0.1 docker-compose down`

## NPM Build Scripts

To view all available build scripts

- `npm run`
