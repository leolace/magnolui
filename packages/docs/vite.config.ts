import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [react(), viteTsPaths(), tailwindcss()],
  server: {
    port: 3000,
  },
});

export default config;
