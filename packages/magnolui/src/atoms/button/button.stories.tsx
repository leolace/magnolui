import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagButton } from "./button.component";

const meta: Meta<typeof MagButton> = {
  component: MagButton,
  title: "Atoms/MagButton",
  argTypes: {
    startIcon: {
      control: { type: "select" },
      options: ["none", "icon1", "icon2"],
      mapping: {
        none: null,
        icon1: <span className="icon-start">🔍</span>,
        icon2: <span className="icon-start">⭐</span>,
      },
    },
    endIcon: {
      control: { type: "select" },
      options: ["none", "icon1", "icon2"],
      mapping: {
        none: null,
        icon1: <span className="icon-end">🔍</span>,
        icon2: <span className="icon-end">⭐</span>,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MagButton>;

export const Primary: Story = {
  args: {
    children: "Click Me",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Start Icon",
    startIcon: <span className="icon-start">🔍</span>,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "End Icon",
    endIcon: <span className="icon-end">🔍</span>,
  },
};
