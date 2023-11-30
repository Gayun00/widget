import type { Meta, StoryObj } from "@storybook/react";
import Component from "./View";

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
  args: {
    dates: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    column: {
      name: "Total event count",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    line: {
      name: "Unique event count",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  },
};
