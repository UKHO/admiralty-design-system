const glob = require("glob");
const path = require("path");
const fs = require("fs");
const sass = require("sass");

class GenerateCss {
  outputDir = "dist/styles";
  stylesDir = "css";
  stylesPath = "";
  outputScssPath = "";
  outputCssPath = "";
  sass_core_styles_import = `@use 'styles/core.scss';\n`;
  sass_components_location_pattern = `components/**/*.scss`;

  constructor() {
    this.stylesPath = path.join(...[this.outputDir, this.stylesDir]);
    this.outputScssPath = path.join(...[this.stylesPath, "merge.scss"]);
    this.outputCssPath = path.join(...[this.stylesPath, "ukho.min.css"]);
  }

  main() {
    try {
      fs.mkdirSync(this.stylesPath, { recursive: true });

      this.writeSassFile();
      this.writeCssFile();
    } catch (e) {
      throw e;
    } finally {
      fs.unlinkSync(this.outputScssPath);
    }
  }

  writeSassFile() {
    fs.writeFileSync(this.outputScssPath, this.sass_core_styles_import);

    const files = glob.sync(this.sass_components_location_pattern);
    const scssContent = files.reduce((acc, file) => acc + `@use '${file}';\n`, "");

    fs.appendFileSync(this.outputScssPath, scssContent);
  }

  writeCssFile() {
    const cssContent = sass.renderSync({
      file: this.outputScssPath,
      outputStyle: "compressed",
      importer: this.importer,
    }).css;

    fs.writeFileSync(this.outputCssPath, cssContent);
  }

  importer(url, prev, done) {
    if (url[0] === "~") {
      url = path.resolve("node_modules", url.substr(1));
    }

    return { file: url };
  }
}

new GenerateCss().main();
