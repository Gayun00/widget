import { describe, expect, it } from "vitest";
import { removeKeyFromObjectsInArray } from ".";

describe("removeKeyFromObjectsInArray 테스트", () => {
  it("입력한 key에 해당하는 프로퍼티를 삭제", () => {
    expect(
      removeKeyFromObjectsInArray([{ id: "sdfsdf", test: "testValue" }], "id")
    ).toEqual([{ test: "testValue" }]);
  });
});
