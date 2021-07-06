const fs = require('fs-extra');
const path = require('path');
const shellExec = require('./shellExec');
const { installPackages, uninstallPackages } = require('./manageDependencies');
const addTemplate = require('./addTemplate');

const createNextApp = async dir => {
  console.log(`Running: npx create-next-app ${dir}`);
  await shellExec(`npx create-next-app ${dir}`);
};

const modifyScripts = async () => {
  console.log('Modifying package.json scripts');

  const file = fs.readFileSync(path.join(process.cwd(), 'package.json'));
  const packageJson = JSON.parse(file);

  packageJson.scripts = {
    start: 'next dev',
    build: 'next build',
    prod: 'next start',
    lint: 'next lint',
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
};

const nextApp = async (dir, opts) => {
  console.log(`Initializing a new next.js app in directory ${dir}`);
  console.log();

  await createNextApp(dir);
  console.log();
  await uninstallPackages('next');
  console.log();
  await installPackages('next', opts);
  console.log();
  await addTemplate('next', opts);
  console.log();
  await modifyScripts();
  console.log();
};

module.exports = nextApp;
