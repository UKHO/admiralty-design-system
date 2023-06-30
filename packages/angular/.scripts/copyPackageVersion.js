const fs = require('fs');
const rootPackageJson = require('../package.json');
const distPackageJson = require('../dist/package.json')

distPackageJson.version = rootPackageJson.version;

fs.writeFileSync('./dist/package.json', JSON.stringify(distPackageJson,null, 2))
