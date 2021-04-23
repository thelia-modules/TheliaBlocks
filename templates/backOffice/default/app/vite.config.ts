const path = require("path");

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      "^/open_api/.*": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/open_api/, "/index_dev.php/open_api/"),
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.tsx"),
      name: "thelia-pages",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
