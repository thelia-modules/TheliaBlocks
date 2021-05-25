const path = require("path");

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
    {
      ...typescript2({
        check: false,
      }),
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "TheliaBlocks",
    },
    target: "es2015",
    outDir: "./dist",
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
