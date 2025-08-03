import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagTextField } from "./text-field.components";

const meta: Meta<typeof MagTextField> = {
  component: MagTextField,
  title: "Atoms/MagTextField",
};
export default meta;

type Story = StoryObj<typeof MagTextField>;

export const Primary: Story = {};
