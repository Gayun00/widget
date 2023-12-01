import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

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

// TODO: api 응답값으로 교체
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
const loading = false;

export default function View() {
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["country", "region", "city"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
      aggregation: {
        model: {
          uniqueEventCount: "sum",
        },
      },
    },
  });

  return (
    <DataGridPremium
      rows={rows}
      columns={COLUMNS}
      apiRef={apiRef}
      loading={loading}
      disableRowSelectionOnClick
      initialState={initialState}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
