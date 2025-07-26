import type { Preview } from "@storybook/react-vite";
import "@mag/styles/tokens.css";
import "@mag/styles/reset.css";
import "@mag/styles/rubik.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
