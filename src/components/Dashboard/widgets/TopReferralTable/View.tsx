import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getGroupedRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface RowData {
  country: string;
  region: string;
  city: string;
  uniqueEventCount: string;
}

const convertDataToObjects = (dataArray) =>
  dataArray.map(([country, region, city, uniqueEventCount]) => ({
    country,
    region,
    city,
    uniqueEventCount,
  }));

const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "uniqueEventCount",
    header: "Unique Event Count",
  },
];

interface Props {
  data: string[][];
}

const View = ({ data }: Props) => {
  const dataObjects = React.useMemo(() => convertDataToObjects(data), [data]);

  const table = useReactTable({
    data: dataObjects,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default View;
