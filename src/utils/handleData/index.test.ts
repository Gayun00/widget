import { describe, it, expect } from "vitest";
import {
  convertArrayToObject,
  formatNumberWithCommas,
  generateDateArray,
  generateSumArrayOfKey,
  generateSumInDateRange,
  getTotalEventSumByDate,
  getUniqueEventSumByDate,
  seperateKeyValuesFromArray,
  sumDataOfKey,
} from ".";
import { topReferral, topReferralTable, userEvents } from "./mockData";
import { removeKeyFromObjectsInArray } from "../testUtil";

describe("sumDataOfKey 테스트", () => {
  it("데이터 중 해당 key의 특정 인덱스 값 총합 리턴", () => {
    expect(sumDataOfKey(userEvents, "2022-03-23", 1)).toBe(3);
    expect(sumDataOfKey(userEvents, "2022-03-23", 2)).toBe(460);
  });

  it("getUniqueEventSumByDate: 데이터 중 해당 날짜의 unique event count 총합 리턴", () => {
    expect(getUniqueEventSumByDate(userEvents, "2022-03-23")).toBe(3);
  });

  it("getTotalEventSumByDate: 데이터 중 해당 날짜의 total event count 총합 리턴", () => {
    expect(getTotalEventSumByDate(userEvents, "2022-03-23")).toBe(460);
  });
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

describe("generateSumArrayOfKey 테스트", () => {
  it("데이터 총합을 내림차순 배열로 리턴", () => {
    expect(generateSumArrayOfKey(topReferral, 1)).toEqual([
      ["naver.com", 71],
      ["www.blog.adbrix.io", 15],
      ["www.google.com.hk", 4],
      ["adpick.co.kr", 1],
      ["madup.atlassian.net", 1],
    ]);
  });

  it("range 값 이하의 순위를 갖는 데이터는 모두 합산해 etc로 반환", () => {
    expect(generateSumArrayOfKey(topReferral, 1, 3)).toEqual([
      ["naver.com", 71],
      ["www.blog.adbrix.io", 15],
      ["www.google.com.hk", 4],
      ["etc", 2],
    ]);
  });
});

describe("seperateKeyValuesFromArray 테스트", () => {
  it("정렬된 한 쌍의 배열 데이터를 각 배열로 분리해 리턴", () => {
    const referral = generateSumArrayOfKey(topReferral, 1, 3);
    if (!referral) return;
    expect(seperateKeyValuesFromArray(referral)).toEqual({
      keys: ["naver.com", "www.blog.adbrix.io", "www.google.com.hk", "etc"],
      values: [71, 15, 4, 2],
    });
  });
});

describe("convertArrayToObject", () => {
  it("입력한 Key값으로 배열을 객체로 변환", () => {
    const result = convertArrayToObject(
      [
        { name: "country", type: "string" },
        { name: "region", type: "string" },
        { name: "city", type: "string" },
        { name: "uniqueEventCount", type: "number" },
      ],
      topReferralTable
    );
    expect(removeKeyFromObjectsInArray(result, "id")).toEqual([
      {
        city: "guro-gu",
        country: "kr",
        region: "seoul",
        uniqueEventCount: 119,
      },
      {
        city: "namyangju",
        country: "kr",
        region: "gyeonggi-do",
        uniqueEventCount: 25,
      },
      {
        city: "pocheon-si",
        country: "kr",
        region: "gyeonggi-do",
        uniqueEventCount: 4,
      },
    ]);
  });
  it("문자열 값 중 빈 값이 있다면 (empty)로 입력", () => {
    const result = convertArrayToObject(
      [
        { name: "country", type: "string" },
        { name: "region", type: "string" },
        { name: "city", type: "string" },
        { name: "uniqueEventCount", type: "number" },
      ],
      [["kr", "", "pocheon-si", "0"]]
    );
    expect(removeKeyFromObjectsInArray(result, "id")).toEqual([
      {
        city: "pocheon-si",
        country: "kr",
        region: "(empty)",
        uniqueEventCount: 0,
      },
    ]);
  });
});
