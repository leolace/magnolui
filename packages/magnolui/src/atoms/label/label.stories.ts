import type { Meta } from "@storybook/react-vite";
import { MagLabel } from "./label.component";

const meta: Meta<typeof MagLabel> = {
  component: MagLabel,
  title: "Atoms/MagLabel",
};
export default meta;

type Story = Meta<typeof MagLabel>;

export const Primary: Story = {
  args: {
    children: "This is a label",
    htmlFor: "input-id",
  },
};
