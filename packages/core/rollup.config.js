import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import litcss from "rollup-plugin-lit-css";
import Sass from "sass";

const production = !process.env.ROLLUP_WATCH;

const PACKAGE_ROOT_PATH = process.cwd();
const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
export default {
  input: `${PACKAGE_ROOT_PATH}/src/index.ts`,
  external: [/@babel\/runtime/],
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      name: "LERNA_PACKAGE_NAME",
      file: "dist/bundle.umd.js",
      format: "umd",
    },
  ],
  plugins: [
    resolve(),
    typescript({
      tsconfig: `./tsconfig.build.json`,
    }),
    babel({
      exclude: "node_modules/**",
      rootMode: "upward",
      babelHelpers: "runtime",
    }),
    litcss({
      include: ["/**/*.scss"],
      transform: (data, { filePath }) => Sass.compile(filePath).css,
    }),
    production && terser(),
  ],
};
