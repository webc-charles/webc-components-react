import type { Meta, StoryObj } from "@storybook/react";
import { InputPassword } from ".";
import { str } from "@/i18n";

const meta: Meta<typeof InputPassword> = {
  title: "Components/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
      description: "input label",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    label: str.password,
    placeholder: str.enter_password,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: str.password,
    placeholder: str.enter_password,
  },
};
