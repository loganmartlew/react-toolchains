#!/usr/bin/env node
const { Command } = require('commander');

const reactApp = require('./reactApp');
const nextApp = require('./nextApp');

const packageJson = require('./package.json');

let projectType;
let projectDir;

const program = new Command(packageJson.name)
  .version(packageJson.version)
  .argument(
    '<project-type>',
    `type of project to start, either 'react' or 'next'`
  )
  .argument(
    '<project-directory>',
    `directory you want to create the project, relative to current working drectory`
  )
  .usage('<project-type> <project-directory> [options]')
  .action((type, dir) => {
    projectType = type;
    projectDir = dir;
  })
  .option('-ts, --typescript', 'use typescript for this project')
  .option('-sc, --styled-components', 'use styled-components for this project')
  .allowUnknownOption()
  .showHelpAfterError()
  .on('--help', () => {})
  .parse(process.argv);

// USE TEMPLATES NOT create-react-app/create-next-app

if (!projectType || !projectDir) {
  program.help();
  return;
}

switch (projectType) {
  case 'react':
    reactApp(projectDir, program.opts());
    break;
  case 'next':
    nextApp(projectDir, program.opts());
    break;
  default:
    program.help();
    break;
}
