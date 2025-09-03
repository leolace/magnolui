import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagSelectOption } from "./components/option/option.component";
import { MagSelect } from "./select.component";

const meta: Meta<typeof MagSelect> = {
  component: MagSelect,
  title: "Molecules/MagSelect",
  args: {
    children: [
      <MagSelectOption key="option1" value="option1">
        Opção 1
      </MagSelectOption>,
      <MagSelectOption key="option2" value="option2">
        Opção 2
      </MagSelectOption>,
      <MagSelectOption key="option3" value="option3" disabled>
        Opção 3
      </MagSelectOption>,
    ],
    placeholder: "Select an option",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200px" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MagSelect>;

export const Primary: Story = {};
