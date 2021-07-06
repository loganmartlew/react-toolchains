const shellExec = require('./shellExec');
const { installPackages, uninstallPackages } = require('./manageDependencies');
const addTemplate = require('./addTemplate');

const createReactApp = async dir => {
  console.log(`Running: npx create-react-app ${dir}`);
  await shellExec(`npx create-react-app ${dir}`);
};

const reactApp = async (dir, opts) => {
  console.log(`Initializing a new react app in directory ${dir}`);
  console.log();

  await createReactApp(dir);
  console.log();
  // await uninstallPackages('react');
  console.log();
  await installPackages('react', opts);
  console.log();
  await addTemplate('react', opts);
  console.log();
};

module.exports = reactApp;
