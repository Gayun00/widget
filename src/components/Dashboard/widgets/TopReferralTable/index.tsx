import React from "react";
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
const rows = [
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
];

function TopReferralTable() {
  return <View columns={COLUMNS} rows={rows} isLoading={false} />;
}

export default TopReferralTable;
