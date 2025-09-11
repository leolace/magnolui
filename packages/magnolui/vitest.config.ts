import typescript from "@rollup/plugin-typescript";
import { defineConfig, defineProject } from "vitest/config";

export default defineConfig({
  plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  test: {
    globals: true,
    projects: [
      defineProject({
        // @ts-expect-error extends doest not exists on type UserWorkspaceConfig
        extends: true,
        test: {
          css: true,
          name: "magnolui-react",
          browser: {
            enabled: true,
            provider: "playwright",
            headless: false,
            instances: [{ browser: "chromium" }],
          },
          globals: true,
          include: [
            "**/*.test.ts",
            "**/*.test.tsx",
            "**/*.spec.ts",
            "**/*.spec.tsx",
          ],
          exclude: ["**/node_modules/**", "**/dist/**", ".rollup.cache"],
        },
      }),
    ],
  },
});
