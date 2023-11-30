import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function View() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    editable: true,
    visibleFields: [
      "commodity",
      "quantity",
      "filledQuantity",
      "status",
      "isFilled",
      "unitPrice",
      "unitPriceCurrency",
      "subTotal",
      "feeRate",
      "feeAmount",
      "incoTerm",
    ],
  });
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ["commodity", "incoTerm"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
      aggregation: {
        model: {
          quantity: "sum",
        },
      },
    },
  });

  return (
    <DataGridPremium
      {...data}
      apiRef={apiRef}
      loading={loading}
      disableRowSelectionOnClick
      initialState={initialState}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
