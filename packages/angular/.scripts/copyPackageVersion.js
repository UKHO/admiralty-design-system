const fs = require("fs");
const rootPackageJson = require("../package.json");
const distPackageJson = require("../dist/package.json");

// Setting the package version as lerna doesn't do it for Angular packages
distPackageJson.version = rootPackageJson.version;

// Updating the core dependency as lerna doesn't do it for Angular packages
distPackageJson.dependencies["@ukho/admiralty-core"].version =
  rootPackageJson.dependencies["@ukho/admiralty-core"].version;

fs.writeFileSync("./dist/package.json", JSON.stringify(distPackageJson, null, 2));
