import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

interface Props {
  columns: {
    id: string;
    field: string;
    headerName: string;
    hide: boolean;
    width: number;
    aggregable?: boolean;
    type?: string;
  }[];
  rows: Array<{
    [key: string]: string | number;
  }>;
  isLoading: boolean;
}

export default function View({ columns, rows, isLoading }: Props) {
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
    <div className="w-full h-full">
      <DataGridPremium
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        loading={isLoading}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}
