const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const Listr = require('listr');
const { bold } = require('colorette');
const semver = require("semver");

const rootDir = path.join(__dirname, '../');

const packages = [
  'packages/core',
  'packages/angular',
];

function readPkg(project) {
  const packageJsonPath = packagePath(project);
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
}

function writePkg(project, pkg) {
  const packageJsonPath = packagePath(project);
  const text = JSON.stringify(pkg, null, 2);
  return fs.writeFileSync(packageJsonPath, `${text}\n`);
}

function packagePath(project) {
  return path.join(rootDir, project, 'package.json');
}

function projectPath(project) {
  return path.join(rootDir, project);
}


function preparePackage(tasks, package, version) {
  const projectRoot = projectPath(package);
  const pkg = readPkg(package);

  const projectTasks = [];
  if (version) {
    projectTasks.push({
      title: `${pkg.name}: validate new version`,
      task: () => {
        if (!isVersionGreater(pkg.version, version)) {
          throw new Error(
            `New version \`${version}\` should be higher than current version \`${pkg.version}\``
          );
        }
      }
    });
  }


    // // Lint, Test, Bump Core dependency
    // if (version) {
    //   projectTasks.push({
    //     title: `${pkg.name}: lint`,
    //     task: () => execa('npm', ['run', 'lint'], { cwd: projectRoot })
    //   });
    //   // TODO will not work due to https://github.com/ionic-team/ionic/issues/20136
    //   // projectTasks.push({
    //   //   title: `${pkg.name}: test`,
    //   //   task: async () => await execa('npm', ['test'], { cwd: projectRoot })
    //   // });
    // }

    // Build
    projectTasks.push({
      title: `${pkg.name}: build`,
      task: () => execa('npm', ['run', 'build'], { cwd: projectRoot })
    });

  // Add project tasks
  tasks.push({
    title: `Prepare ${bold(pkg.name)}`,
    task: () => new Listr(projectTasks)
  });
}

const isValidVersion = input => Boolean(semver.valid(input));

function isVersionGreater(oldVersion, newVersion) {
  if (!isValidVersion(newVersion)) {
    throw new Error('Version should be a valid semver version.');
  }
  return true;
}

module.exports = {
  isValidVersion,
  isVersionGreater,
  packages,
  packagePath,
  preparePackage,
  projectPath,
  readPkg,
  rootDir,
  writePkg
};
