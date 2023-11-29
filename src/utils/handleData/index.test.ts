import { describe, it, expect } from "vitest";
import { user_events } from "./mockdata";
import { getTotalEventSumByDate, sumDataByDate } from ".";

describe("특정 날짜의 unique event count 총합 구하기", () => {
  it("데이터 중 해당 날짜의 특정 인덱스 값 총합 리턴", () => {
    expect(sumDataByDate(user_events.data.rows, "2022-03-23", 1)).toBe(3);
    expect(sumDataByDate(user_events.data.rows, "2022-03-23", 2)).toBe(20);
  });

  it("getUniqueEventSumByDate: 데이터 중 해당 날짜의 unique event count 총합 리턴", () => {
    function getUniqueEventSumByDate(
      rows: string[][],
      targetDate: string
    ): number {
      return sumDataByDate(rows, targetDate, 1);
    }
    expect(getUniqueEventSumByDate(user_events.data.rows, "2022-03-23")).toBe(
      3
    );
  });

  it("데이터 중 해당 날짜의 total event count 총합 리턴", () => {
    expect(getTotalEventSumByDate(user_events.data.rows, "2022-03-23")).toBe(
      20
    );
  });
});
