const path = require("path");

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "src/main.tsx",
    },
  },
});
