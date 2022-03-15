const common = require('./common');
const Listr = require('listr');
const execa = require("execa");


async function main() {
  const tasks = [];
  tasks.push({
    title: `Boostrap packages`,
    task: () => execa('lerna', ['bootstrap'])
  });
  common.packages.forEach(package => {
    common.preparePackage(tasks, package, false);
  });

  const listr = new Listr(tasks, { showSubtasks: true });
  await listr.run();
}

main();
