import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagLoader } from "./loader.component";

const meta: Meta<typeof MagLoader> = {
  component: MagLoader,
  title: "Atoms/MagLoader",
  argTypes: {
    type: {
      options: ["spinner", "dots"],
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof MagLoader>;

export const Primary: Story = {};
