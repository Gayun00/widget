import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { v4 as uuid } from "uuid";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const UNIQUE_EVENT_COUNT_INDEX = 1;
const TOTAL_EVENT_COUNT_INDEX = 2;

export const sumDataOfKey = (
  rows: string[][],
  targetDate: string,
  dataIndex: number
): number => {
  return rows
    .filter((row) => row[0] === targetDate)
    .reduce((sum, row) => sum + parseInt(row[dataIndex], 10), 0);
};

export const generateSumArrayOfKey = (
  data: string[][],
  dataIndex: number,
  range?: number
) => {
  if (!data) return;
  const sum: Record<string, number> = {};

  data.forEach((date) => {
    if (!sum[date[0]]) {
      sum[date[0]] = parseInt(date[dataIndex], 10);
    } else {
      sum[date[0]] += parseInt(date[dataIndex], 10);
    }
  });

  const sortedSum = Object.entries(sum).sort((a, b) => b[1] - a[1]);
  if (!range) return sortedSum;
  if (sortedSum.length > range) {
    const others = sortedSum
      .slice(range)
      .reduce((acc, [, value]) => acc + value, 0);
    return sortedSum.slice(0, 3).concat([["etc", others]]);
  }
};

export const seperateKeyValuesFromArray = (data: [string, number][]) => {
  const keys = data.map((item) => item[0]);
  const values = data.map((item) => item[1]);
  return { keys, values };
};

export const getUniqueEventSumByDate = (
  rows: string[][],
  targetDate: string
): number => {
  return sumDataOfKey(rows, targetDate, UNIQUE_EVENT_COUNT_INDEX);
};

export const getTotalEventSumByDate = (
  rows: string[][],
  targetDate: string
): number => {
  return rows
    .filter((row) => row[0] === targetDate)
    .reduce((sum, row) => sum + parseInt(row[TOTAL_EVENT_COUNT_INDEX], 10), 0);
};

export const generateSumInDateRange = (
  dates: string[][],
  startDate: string,
  endDate: string,
  dataIndex: number
) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const sum: Record<string, number> = {};

  if (!dates) return [];
  for (let d = start; d.isSameOrBefore(end); d = d.add(1, "day")) {
    sum[d.format("YYYY-MM-DD")] = 0;
  }

  dates.forEach((date) => {
    const curDate = dayjs(date[0]);
    if (curDate.isSameOrBefore(end) && curDate.isSameOrAfter(start)) {
      sum[date[0]] += parseInt(date[dataIndex], 10);
    }
  });

  return Object.values(sum);
};

export const generateDateArray = (startDate: string, endDate: string) => {
  let start = dayjs(startDate);
  const end = dayjs(endDate);

  const dates = [];

  while (start.isSameOrBefore(end)) {
    dates.push(start.format("YYYY-MM-DD"));
    start = start.add(1, "day");
  }

  return dates;
};

export const formatNumberWithCommas = (number: number) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertArrayToObject = (
  keys: {
    name: string;
    type: "string" | "number";
  }[],
  data: string[][]
) => {
  if (!data) return [];
  return data.map((item) => {
    const obj: Record<string, string | number> = {};
    keys.forEach((key, index) => {
      obj["id"] = uuid();
      if (key.type === "string") {
        obj[key.name] = item[index].length ? item[index] : "(empty)";
      } else {
        obj[key.name] = parseInt(item[index], 10);
      }
    });
    return obj;
  });
};
