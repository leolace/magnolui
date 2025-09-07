import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagTypography } from "./typography.component";

const meta: Meta<typeof MagTypography> = {
  component: MagTypography,
  title: "Atoms/MagTypography",
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "time"],
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "warn", "success"],
    },
    opacity: {
      control: { type: "select" },
      options: ["100", "80", "60", "40", "20"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof MagTypography>;

export const Primary: Story = {
  args: {
    children: "This is primary typography",
    tag: "p",
    type: "primary",
    opacity: "100",
  },
};
