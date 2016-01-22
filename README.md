# generator-ngpack

## Overview

Yeoman AngularJS 1.x Webpack Generator.

This project is not yet published to NPM or registered as a Yeoman generator so install is from Github.

## Install

- `git clone git@github.com:rudijs/generator-ngpack.git`
- `cd generator-ngpack`
- Yeoman globablly.
- `npm i -g yo`
- NPM link so that Yo can find this generator.
- `npm link`

## Usage: Create a new web app.

The generator will:

1. Create all the project files
2. NPM install package dependencies
3. Compile from the `src` directory into the *development* `build` directory.

**Steps**:

- Create a new project directory.
- `mkdir new-site`
- `cd new-site`
- Use CamelCase for the project name.
- `yo ngpack NewSite`

Further details, including *production* builds, consult the new project README.md file.