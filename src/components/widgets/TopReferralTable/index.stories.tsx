import type { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import { TopReferralTableData } from "@/types/api";
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

const columns: ColumnDef<TopReferralTableData>[] = [
  {
    accessorKey: "country",
    header: "Country",
    cell: (info) => info.getValue(),
    enableSorting: true,
  },
  {
    accessorKey: "region",
    id: "region",
    header: () => <span>Region</span>,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "city",
    header: () => <span>City</span>,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "uniqueEventCount",
    header: "Unique event count",
    cell: (info) => info.getValue(),
    aggregationFn: (_, leafRows) => {
      const total = leafRows.reduce((sum, row) => {
        const value = parseInt(row.getValue("uniqueEventCount"));
        return sum + value;
      }, 0);
      return total;
    },
    aggregatedCell: ({ getValue }) => getValue(),
  },
];

export const Default: Story = {
  args: {
    title: "Top referrals",
    columns: columns,
    rows: [
      {
        country: "USA",
        region: "California",
        city: "New York",
        uniqueEventCount: 20,
      },
      {
        country: "GSA",
        region: "Aalifornia",
        city: "New York",
        uniqueEventCount: 20,
      },
    ],
  },
};
