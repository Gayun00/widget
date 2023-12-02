import type { Meta, StoryObj } from "@storybook/react";
import Component from "./View";

const meta: Meta<typeof Component> = {
  title: "widgets/TopReferralPie",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    title: "Top referrals",
    data: [44, 55, 13, 43, 22],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  },
};

export const EmptyDataOrLabels: Story = {
  args: {
    title: "Top referrals",
    data: [],
    labels: [],
  },
};
