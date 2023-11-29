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

export const ChangeRateIncreased: Story = {
  args: {
    title: "접속유저",
    type: "SUM",
    property: "Unique Event Count",
    data: 18204,
    changeRate: 93,
  },
};

export const ChangeRateDecreased: Story = {
  args: {
    title: "접속유저",
    type: "SUM",
    property: "Unique Event Count",
    data: 18204,
    changeRate: -93,
  },
};

export const TotalEventWidget: Story = {};
