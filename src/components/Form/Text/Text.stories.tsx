import type { Meta, StoryObj } from "@storybook/react";
import { str } from "@/i18n";
import { InputText } from ".";

const meta: Meta<typeof InputText> = {
  title: "Components/InputText",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: str.enter_email,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: str.enter_email,
    disabled: true,
  },
};
