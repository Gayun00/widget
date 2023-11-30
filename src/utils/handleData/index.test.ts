import { describe, it, expect } from "vitest";
import {
  formatNumberWithCommas,
  generateDateArray,
  generateSumInDateRange,
  getTotalEventSumByDate,
  sumDataOfKey,
} from ".";
import { userEvents } from "./mockData";

describe("특정 날짜의 data 총합 구하기", () => {
  it("데이터 중 해당 날짜의 특정 인덱스 값 총합 리턴", () => {
    expect(sumDataOfKey(userEvents, "2022-03-23", 1)).toBe(3);
    expect(sumDataOfKey(userEvents, "2022-03-23", 2)).toBe(460);
  });

  it("getUniqueEventSumByDate: 데이터 중 해당 날짜의 unique event count 총합 리턴", () => {
    function getUniqueEventSumByDate(
      rows: string[][],
      targetDate: string
    ): number {
      return sumDataOfKey(rows, targetDate, 1);
    }
    expect(getUniqueEventSumByDate(userEvents, "2022-03-23")).toBe(3);
  });

  it("데이터 중 해당 날짜의 total event count 총합 리턴", () => {
    expect(getTotalEventSumByDate(userEvents, "2022-03-23")).toBe(460);
  });

  it("topReferral 사이트 별 총합 배열");
});

describe("generateSumInDateRange", () => {
  it("입력한 날짜 구간의 접속 유저 총합 배열 생성", () => {
    expect(
      generateSumInDateRange(userEvents, "2022-03-08", "2022-03-11", 1)
    ).toEqual([8, 0, 0, 11]);
  });

  it("입력한 날짜 구간의 접속 횟수 총합 배열 생성", () => {
    expect(
      generateSumInDateRange(userEvents, "2022-03-08", "2022-03-11", 2)
    ).toEqual([80, 0, 0, 110]);
  });
});

describe("generateDateArray 테스트", () => {
  it("날짜 구간에 해당하는 각 날짜 배열 생성", () => {
    expect(generateDateArray("2022-02-23", "2022-02-30")).toEqual([
      "2022-02-23",
      "2022-02-24",
      "2022-02-25",
      "2022-02-26",
      "2022-02-27",
      "2022-02-28",
      "2022-03-01",
      "2022-03-02",
    ]);
  });
});

describe("formatNumberWithCommas 테스트", () => {
  it("10000을 10,000으로 변환", () => {
    expect(formatNumberWithCommas(10000)).toBe("10,000");
  });
});
