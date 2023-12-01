export const mockData = {
  columns: [
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
      type: "number",
      width: 110,
    },
  ],
  experimentalFeatures: {
    ariaV7: true,
  },
  initialState: {
    aggregation: {
      model: {
        uniqueEventCount: "sum",
      },
    },
    columns: {
      columnVisibilityModel: {},
    },
    rowGrouping: {
      model: ["country", "region", "city"],
    },
  },
  rows: [
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
  ],
};
