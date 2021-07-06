const fs = require('fs-extra');
const path = require('path');
const frameworkData = require('./frameworkData');

const getTemplate = (framework, opts) => {
  const frameworkTemplates = frameworkData[framework].templates;

  const templates = [];

  if (opts.typescript) {
    if (frameworkTemplates.typescript.path) {
      templates.push(frameworkTemplates.typescript);
    }
  }

  if (opts.styledComponents) {
    if (frameworkTemplates.styledComponents.path) {
      templates.push(frameworkTemplates.styledComponents);
    }
  }

  if (templates.length > 0) {
    let compoundPath = templates.reduce((acc, curr) => {
      return acc + curr.path + '-';
    }, '');

    if (compoundPath.endsWith('-')) {
      compoundPath = compoundPath.slice(0, -1);
    }
    return compoundPath;
  }

  return 'default';
};

const deleteDirectories = deletes => {
  console.log('Deleting unnecessary directories');
  console.log();

  deletes.forEach(pathToDelete => {
    const fullPath = path.join(process.cwd(), pathToDelete);
    fs.removeSync(fullPath);
  });
};

const addTemplate = async (framework, opts) => {
  deleteDirectories(frameworkData[framework].deletes);

  const templatePath = path.join(
    __dirname,
    'templates',
    framework,
    getTemplate(framework, opts)
  );

  console.log(`Applying template ${getTemplate(framework, opts)}`);
  console.log();

  const files = fs.readdirSync(templatePath);

  files.forEach(file => {
    const templateFilePath = path.join(templatePath, file);
    const newFilePath = path.join(process.cwd(), file);

    if (fs.lstatSync(templateFilePath).isDirectory()) {
      fs.emptyDirSync(newFilePath);
      fs.copySync(templateFilePath, newFilePath, {
        overwrite: true,
      });
    } else {
      fs.copyFileSync(templateFilePath, newFilePath);
    }
  });

  console.log('Template applied');
  console.log();
};

module.exports = addTemplate;
