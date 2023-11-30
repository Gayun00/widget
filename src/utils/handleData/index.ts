import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const sumDataByDate = (
  rows: string[][],
  targetDate: string,
  dataIndex: number
): number => {
  return rows
    .filter((row) => row[0] === targetDate)
    .reduce((sum, row) => sum + parseInt(row[dataIndex], 10), 0);
};

export const getUniqueEventSumByDate = (
  rows: string[][],
  targetDate: string
): number => {
  return sumDataByDate(rows, targetDate, 1);
};

export const getTotalEventSumByDate = (
  rows: string[][],
  targetDate: string
): number => {
  return rows
    .filter((row) => row[0] === targetDate)
    .reduce((sum, row) => sum + parseInt(row[2], 10), 0);
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
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
