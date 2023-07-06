const fs = require("fs");

// Read the original package.json file
const packageJson = JSON.parse(fs.readFileSync("package.json"));

// Read the existing package.json file in dist folder
const distPackageJson = JSON.parse(fs.readFileSync("dist/package.json"));

// Update the version in distPackageJson
distPackageJson.version = packageJson.version;

// Update the version of @ukho/admiralty-core dependency if it exists
if (distPackageJson.dependencies && distPackageJson.dependencies["@ukho/admiralty-core"]) {
  distPackageJson.dependencies["@ukho/admiralty-core"] = packageJson.dependencies["@ukho/admiralty-core"];
}

// Write the updated package.json to the dist directory
fs.writeFileSync("dist/package.json", JSON.stringify(distPackageJson, null, 2));

console.log("Version updated in dist/package.json");
