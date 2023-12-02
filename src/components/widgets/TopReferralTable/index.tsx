import { useMemo } from "react";
import { convertArrayToObject } from "@/utils/handleData";
import View from "./View";
import { useTopReferralAreaQuery } from "@/queries";

const COLUMNS = [
  {
    id: "country",
    field: "country",
    headerName: "Country",
    hide: false,
    width: 110,
    aggregable: true,
  },
  {
    id: "region",
    field: "region",
    headerName: "Region",
    hide: false,
    width: 110,
    aggregable: true,
  },
  {
    id: "city",
    field: "city",
    headerName: "City",
    hide: false,
    width: 110,
    aggregable: true,
  },
  {
    id: "uniqueEventCount",
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
        topReferral || []
      ),
    [topReferral]
  );
  return (
    <View
      title="Top referrals"
      columns={COLUMNS}
      rows={data}
      isLoading={false}
    />
  );
}

export default TopReferralTable;
