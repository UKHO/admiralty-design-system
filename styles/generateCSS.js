var glob = require("glob");
var fs = require("fs");
var sass = require("sass");

var outputDirectory = "dist-styles";
var temporaryFile = `${outputDirectory}/merge.scss`;
var outputFile = `${outputDirectory}/ukho.min.css`;

glob("components/**/*.scss", (err, files) => {
  try {
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }
    fs.appendFileSync(temporaryFile, `@use 'styles/core.scss';\n`);
    files.forEach((file) => {
      fs.appendFileSync(temporaryFile, `@use '${file}';\n`);
    });
    var result = sass.renderSync({
      file: temporaryFile,
      outputStyle: "compressed"
    });

    fs.writeFileSync(outputFile, result.css);
  } catch (e) {
    throw e;
  } finally {
    fs.unlinkSync(temporaryFile);
  }
});
