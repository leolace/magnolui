import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [react(), viteTsPaths()],
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
  },
});

export default config;
