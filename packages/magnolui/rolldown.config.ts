import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rolldown";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default defineConfig({
  input: "./src/index.tsx",
  tsconfig: "./tsconfig.build.json",
  output: {
    file: pkg.module,
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    typescript({ tsconfig: "./tsconfig.build.json" }),
    postcss(),
  ],
});
