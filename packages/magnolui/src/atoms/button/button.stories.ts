import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagButton } from "./button.component";

const meta: Meta<typeof MagButton> = {
  component: MagButton,
  title: "Atoms/MagButton",
};
export default meta;

type Story = StoryObj<typeof MagButton>;

export const Primary: Story = {
  args: {
    children: "Click Me",
  },
};
