import type { Meta, StoryObj } from "@storybook/react";
import Component from "./View";

const meta: Meta<typeof Component> = {
  title: "widgets/TopReferralTable",
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
    data: [
      ["kr", "seoul", "guro-gu", "119"],
      ["kr", "seoul", "gangnam-gu", "85"],
      ["us", "california", "los angeles", "200"],
    ],
  },
};
