import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["*.mdx", "../../magnolui/src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-onboarding",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
