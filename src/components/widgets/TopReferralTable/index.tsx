import { useMemo } from "react";
import { convertArrayToObject } from "@/utils/handleData";
import View from "./View";
import { useTopReferralAreaQuery } from "@/queries";
import { ColumnDef } from "@tanstack/react-table";
import { TopReferralTableData } from "@/types/api";

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
function TopReferralTable() {
  const { data: topReferral } = useTopReferralAreaQuery();
  const data = useMemo(() => {
    const result = convertArrayToObject(
      [
        { name: "country", type: "string" },
        { name: "region", type: "string" },
        { name: "city", type: "string" },
        { name: "uniqueEventCount", type: "number" },
      ],
      topReferral || []
    );
    return result as unknown as TopReferralTableData[];
  }, [topReferral]);
  return (
    <View
      title="Top referral"
      columns={columns}
      rows={data}
      isLoading={false}
    />
  );
}

export default TopReferralTable;
