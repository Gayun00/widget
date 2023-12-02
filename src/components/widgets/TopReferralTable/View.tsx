import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getGroupedRowModel,
  getExpandedRowModel,
  flexRender,
  getSortedRowModel,
  GroupingState,
  ColumnDef,
} from "@tanstack/react-table";
import { FaSort } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";
import { TopReferralTableData } from "@/types/api";
import WidgetLayout from "../WidgetLayout";

interface Props {
  title: string;
  columns: ColumnDef<TopReferralTableData>[];
  rows: TopReferralTableData[];
  isLoading: boolean;
}

export default function View({ title, columns, rows }: Props) {
  const [grouping] = React.useState<GroupingState>([
    "country",
    "region",
    "city",
  ]);

  const table = useReactTable({
    data: rows,
    columns,
    state: {
      grouping,
    },
    getCoreRowModel: getCoreRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <WidgetLayout title={title} hasData={!!rows} isScrollable>
      <div className="p-2">
        <table className="h-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="border-2">
                    <button onClick={header.column.getToggleSortingHandler()}>
                      <FaSort />{" "}
                    </button>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="w-full h-full">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="border-2">
                        {cell.getIsGrouped() ? (
                          <>
                            <button
                              className="flex items-center gap-x-2"
                              {...{
                                onClick: row.getToggleExpandedHandler(),
                                style: {
                                  cursor: row.getCanExpand()
                                    ? "pointer"
                                    : "normal",
                                },
                              }}>
                              {row.getIsExpanded() ? (
                                <FaCircleArrowDown />
                              ) : (
                                <FaRegArrowAltCircleRight />
                              )}{" "}
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}{" "}
                              ({row.subRows.length})
                            </button>
                          </>
                        ) : cell.getIsAggregated() ? (
                          flexRender(
                            cell.column.columnDef.aggregatedCell ??
                              cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        ) : cell.getIsPlaceholder() ? null : (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </WidgetLayout>
  );
}
