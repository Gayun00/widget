import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { mockData } from "./mockData";

export default function View() {
  const data = mockData;
  const loading = false;

  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
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
  return (
    <DataGridPremium
      {...data}
      columns={COLUMNS}
      apiRef={apiRef}
      loading={loading}
      disableRowSelectionOnClick
      initialState={initialState}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
