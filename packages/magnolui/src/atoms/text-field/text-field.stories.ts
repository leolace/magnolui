import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { MagTextField } from "./text-field.components";

const meta: Meta<typeof MagTextField> = {
  component: MagTextField,
  title: "Atoms/MagTextField",
};
export default meta;

type Story = StoryObj<typeof MagTextField>;

export const Primary: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = await canvas.findByTestId("mag-text-field");

    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
  },
};
