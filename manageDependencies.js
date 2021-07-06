const shellExec = require('./shellExec');
const frameworkData = require('./frameworkData');

const uninstallPackages = async framework => {
  for (const package of frameworkData[framework].uninstalls) {
    console.log(`Uninstalling ${package}...`);
    await shellExec(`npm uninstall ${package}`);
    console.log(`Uninstalled: ${package}`);
  }
};

const installInArray = async (arr, dev) => {
  for (const package of arr) {
    console.log(`Installing ${package}...`);
    console.log();
    await shellExec(`npm install ${dev ? '-D ' : ''}${package}`);
    console.log(`Installed: ${package}`);
    console.log();
  }
};

const installProdDev = async (framework, type) => {
  console.log(`Installing ${type} dependencies`);
  await installInArray(frameworkData[framework].installs.prod[type], false);
  console.log();

  console.log(`Installing ${type} dev dependencies`);
  await installInArray(frameworkData[framework].installs.dev[type], true);
  console.log();
};

const installPackages = async (framework, opts) => {
  await installProdDev(framework, 'default');

  if (opts.typescript) {
    await installProdDev(framework, 'typescript');
  }

  if (opts.styledComponents) {
    await installProdDev(framework, 'styledComponents');
  }
};

module.exports = {
  uninstallPackages,
  installPackages,
};
