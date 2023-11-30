import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta: Meta<typeof Component> = {
  title: "widgets/DAU",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
