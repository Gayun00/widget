import type { Meta, StoryObj } from "@storybook/react";
import UsersWidget from ".";

const meta: Meta<typeof UsersWidget> = {
  title: "widgets/UsersWidget",
  component: UsersWidget,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof UsersWidget>;

export const UniqueEventWidget: Story = {
  args: {
    //TODO: args 추가
  },
};

export const TotalEventWidget: Story = {};
