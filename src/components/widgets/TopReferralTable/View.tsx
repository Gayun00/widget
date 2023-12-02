import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import WidgetLayout from "../WidgetLayout";

interface Props {
  title: string;
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

export default function View({ title, columns, rows, isLoading }: Props) {
  const WrappedDataGrid = () => {
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
      <div className="h-5/6">
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
  };

  return (
    <WidgetLayout title={title} hasData={!!rows.length}>
      <WrappedDataGrid />
    </WidgetLayout>
  );
}