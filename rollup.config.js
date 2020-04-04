import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "src/index.js",
  output: [
    {
      name: "charts",
      file: "build/chart.js",
      format: "umd"
    }
  ],
  plugins: [resolve(), commonjs()]
};
