import type { Meta, StoryObj } from "@storybook/react";
import StatsOverViewWidget from ".";

const meta: Meta<typeof StatsOverViewWidget> = {
  title: "widgets/StatsOverViewWidget",
  component: StatsOverViewWidget,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof StatsOverViewWidget>;

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

export const emptyData: Story = {
  args: {
    title: "접속유저",
    type: "SUM",
    property: "Unique Event Count",
    changeRate: -93,
  },
};
