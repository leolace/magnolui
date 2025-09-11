// eslint-disable-next-line import/order
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, defineProject, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Use `workspace` field in Vitest < 3.2
      projects: [
        defineProject({
          // @ts-expect-error extends doest not exists on type UserWorkspaceConfig
          extends: true,
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: path.join(dirname, ".storybook"),
              // This should match your package.json script to run Storybook
              // The --ci flag will skip prompts and not open a browser
              storybookScript: "pnpm storybook --ci",
            }),
          ],
          test: {
            name: "magnolui-react",
            // Enable browser mode
            browser: {
              enabled: true,
              // Make sure to install Playwright
              provider: "playwright",
              headless: true,
              instances: [{ browser: "chromium" }],
            },
            setupFiles: [path.join(dirname, ".storybook/vitest.setup.ts")],
          },
        }),
      ],
    },
  }),
);
