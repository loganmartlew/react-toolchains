# react-toolchains

An npx cli tool for generating react apps.

This tool generates projects with less boilerplate that are ready to use right away. This tool is intended to replace create-react-app and create-next-app for those who like the way the generated projects are set up.

The tool runs `npx create-react-app` or `npx create-next-app` on your machine to ensure that all default dependencies and React/Next.js features are up to date.

Different templates are used for your project depending on your options to ensure that all features of the generated project are ready to use.

### Usage

Using npm:
`npx react-toolchains <project-type> <project-directory> [options]`

`project-type`: framework to use, either 'react' or 'next'

`project-directory`: relative directory to generate the project, passed as first argument to `create-react-app` or `create-next-app`

Options:
`-V, --version`: output the version number
`-ts, --typescript`: use typescript for this project
`-sc, --styled-components`: use styled-components for this project
`-h, --help`: display help for command

### Frameworks

Currently supported frameworks:

- React (create-react-app)
- Next.js (create-react-app)

### Options

Optionally installed packages:

- Typescript
- styled-components
