const fs = require("fs");
const rootPackageJson = require("../package.json");
const distPackageJson = require("../dist/package.json");

// Setting the package version as lerna doesn't do it for Angular packages
rootPackageJson.exports = distPackageJson.exports;

fs.writeFileSync("./package.json", JSON.stringify(rootPackageJson, null, 2));
