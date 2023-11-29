export const sumDataByDate = (
  rows: string[][],
  targetDate: string,
  index: number
): number => {
  return rows
    .filter((row) => row[0] === targetDate)
    .reduce((sum, row) => sum + parseInt(row[index], 10), 0);
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

export const formatNumberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
