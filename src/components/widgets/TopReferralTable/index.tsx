import { useTopReferralAreaQuery } from "@/queries";
import { useMemo } from "react";
import { convertArrayToObject } from "@/utils/handleData";
import View from "./View";

const COLUMNS = [
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
];

function TopReferralTable() {
  const { data: topReferral } = useTopReferralAreaQuery();
  const data = useMemo(
    () =>
      convertArrayToObject(
        [
          { name: "country", type: "string" },
          { name: "region", type: "string" },
          { name: "city", type: "string" },
          { name: "uniqueEventCount", type: "number" },
        ],
        topReferral?.data?.rows || []
      ),
    [topReferral]
  );
  return <View columns={COLUMNS} rows={data} isLoading={false} />;
}

export default TopReferralTable;
