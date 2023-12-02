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
    title: "Top referrals",
    columns: [
      {
        id: "123",
        field: "country",
        headerName: "Country",
        hide: false,
        width: 110,
        aggregable: true,
      },
      {
        id: "234",
        field: "region",
        headerName: "Region",
        hide: false,
        width: 110,
        aggregable: true,
      },
      {
        id: "345",
        field: "city",
        headerName: "City",
        hide: false,
        width: 110,
        aggregable: true,
      },
      {
        id: "456",
        field: "uniqueEventCount",
        headerName: "Unique event count",
        hide: false,
        width: 110,
        type: "number",
      },
    ],
    rows: [
      {
        id: "3",
        country: "USA",
        region: "California",
        city: "New York",
        uniqueEventCount: 20,
      },
      {
        id: "30",
        country: "USA",
        region: "California",
        city: "New York",
        uniqueEventCount: 20,
      },
    ],
  },
};
