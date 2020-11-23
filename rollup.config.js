import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import clear from "rollup-plugin-clear";

/**
 * Where our output will be written to disk
 */
const outputDir = "./public/js/";

const getPluginsConfig = (prod, buildType, mini) => {
  const sortie = [
    /**
     * Clear previous builds
     */
    clear({
      targets: [ buildType === "modern" ? `${outputDir}esm` : `${outputDir}system`],
      watch: true
    }),
    nodeResolve({
      mainFields: ["module", "main", "browser"],
      dedupe: ["react", "react-dom"],
      preferBuiltins: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        prod ? "production" : "development"
      )
    }),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      /**
       * Uncomment to ignore node_modules. This will accelerate yur build,
       * but prevent you from using modern syntax in your dependencies
       */
      // exclude: "node_modules/**"
    }),
    globals(),
    builtins()
  ];
  if (mini) {
    sortie.push(
      /**
       * Minification.
       * We don't want Terser to remove code since Rollup is supposed to
       * do that for us
       */
      terser({
        compress: {
          unused: false,
          collapse_vars: false
        },
        output: {
          comments: !prod
        },
        ecma: buildType === "legacy" ? 5 : 8,
        safari10: true,
      })
    );
  }
  return sortie;
};

export default CLIArgs => {
  /**
   * Usage : `rollup -c --prod --mini`
   */
  const prod = !!CLIArgs.prod;
  const mini = !!CLIArgs.mini;
  const buildType = typeof process.env.ROLLUP_BUILD_TYPE !== "undefined" ? process.env.ROLLUP_BUILD_TYPE : "modern";
  const bundle = {
    input: ["./src/index.jsx"],
    output: buildType === "modern" ?
      {
        dir: `${outputDir}system/`,
        format: "system"
      } :
      {
        dir: `${outputDir}esm/`,
        format: "esm"
      }
    ,
    watch: {
      include: ["./src/**"]
    }
  };
  bundle.plugins = getPluginsConfig(prod, buildType, mini);
  return bundle;
};
